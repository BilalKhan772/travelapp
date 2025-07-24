// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { getUserFromToken } from '../utils/auth';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const user = getUserFromToken();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'ADMIN') {
    return <Navigate to="/group-fare" />;
  }

  return children;
};

export default PrivateRoute;
