import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
const RequestEnquiry = Loadable(lazy(() => import('views/pages/request/enquiry')));

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <RequestEnquiry />
    },
    {
      path: '/ipmoe/unlockpage',
      element: <RequestEnquiry />
    }
  ]
};

export default MainRoutes;
