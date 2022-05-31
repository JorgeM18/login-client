import React from 'react';
import AuthAPI from '../../api/auth.api';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);

  const register = async (username, callback) => {
    await AuthAPI.registerWithLoginID(username);
    setUser(username);
    callback();
  };

  const signin = async (username, callback) => {
    const user = await AuthAPI.authenticateWithLoginID(username);
    if (user.is_authenticated) {
      setUser(username);
      callback();
    }
  };

  const signout = async (callback) => {
    setUser(null);
    callback();
  }
  
  const value = {
    user,
    register,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return React.useContext(AuthContext);
};

const requireAuth = ({children}) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location}} replace />;
  }
  return children;
};

export {
  AuthProvider,
  useAuth,
  requireAuth,
}