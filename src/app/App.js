import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
import './App.css';

function App() {

  return (
    <div className='app__container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
