// import { matchRoutes, renderRoutes } from 'react-router-config';
import { Navigate } from 'react-router-dom';

import { PAGE_PATHS } from '../helpers/constants/pagePaths.constants';

const DefaultRoute = ({ route }: any) => {
  return <Navigate to={PAGE_PATHS.LOGIN} />;
};

export default DefaultRoute;
