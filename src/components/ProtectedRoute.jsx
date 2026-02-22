import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function getDashboardPath(role) {
  switch (role) {
    case 'ADMIN':   return '/admin/dashboard';
    case 'MANAGER': return '/manager/dashboard';
    case 'STAFF':   return '/staff/dashboard';
    default:        return '/signin';
  }
}

export default function ProtectedRoute({ allowedRole }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/signin" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to={getDashboardPath(user.role)} replace />;
  }

  return <Outlet />;
}