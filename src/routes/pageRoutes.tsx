import { Navigate, Route, Routes } from 'react-router-dom';

import PersistLogin from '@/context/PersistentLogin';
import { PAGE_PATHS } from '@/helpers/constants/pagePaths.constants';
import Login from '@/pages/public/Login';

import RequireAuth from './authorized.route';
import { Dashboard } from '@/pages/dashboard/Dashboard';

const pageRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path={PAGE_PATHS.LOGIN} element={<Login />} />
      {/* protected routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path={PAGE_PATHS.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default pageRoutes;
