import { FC } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useAuth from '@/hooks/useAuth';

const RequireAuth: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
  const { auth } = useAuth();
  const location = useLocation();
  return cookies.refreshToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
