import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to the HomeScreen
    return <Navigate to="/" />;
  }

  // If authenticated, render the children (Dashboard)
  return children;
};

export default ProtectedRoute;
