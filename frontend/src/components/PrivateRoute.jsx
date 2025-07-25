import { Navigate, useLocation } from 'react-router-dom';
import { getUserFromToken } from '../utils/auth';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const user = getUserFromToken();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Admin Panel access (adminOnly = true)
  if (adminOnly && user.role !== 'ADMIN') {
    return <Navigate to="/group-fare" />;
  }

  // Prevent regular users from accessing admin panel accidentally
  if (!adminOnly && location.pathname.startsWith('/admin-panel') && user.role !== 'ADMIN') {
    return <Navigate to="/group-fare" />;
  }

  return children;
};

export default PrivateRoute;
