import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserStatus.css';
import {useAuth} from "../contexts/AuthContextProvider.jsx";

export const UserStatus = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isAuthenticated) {
    return (
      <div className="user-status">
        <button 
          onClick={() => navigate('/login')} 
          className="login-link"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="user-status">
      <span className="user-greeting">Welcome, {user.name}!</span>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};
