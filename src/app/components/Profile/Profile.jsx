import React from "react";
import { useAuth } from "../../../context/auth/store";
import Alert from 'react-bootstrap/Alert';

const Profile = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <Alert variant="danger">You're not allowed to access this resource</Alert>
    );
  }
  return <Alert variant={"success"}>Welcome {auth.user}!</Alert>;
};

export default Profile;
