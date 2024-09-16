import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

function PrivateRoute({ children }) {
  const user = AuthService.getCurrentUser();

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
