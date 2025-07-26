// components/ProtectedPageWrapper.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn, getUserFromToken } from '../utils/auth';

const ProtectedPageWrapper = ({ children, requireApproval = false }) => {
  const loggedIn = isLoggedIn();
  const user = getUserFromToken();

  // Not logged in? Redirect to login
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Require approval but user not approved? Redirect to subscription
  if (requireApproval && !user?.isApproved) {
    return <Navigate to="/subscription" replace />;
  }

  // User is allowed
  return <>{children}</>;
};

export default ProtectedPageWrapper;
