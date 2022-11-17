// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const dashboard = {
  id: 'dashboard',
  title: 'Administration',
  type: 'group',
  children: [
    {
      id: 'admin-profile',
      title: 'Profile Maintenance',
      type: 'item',
      url: '/db-admin/profile',
      icon: icons.IconDashboard,
      // breadcrumbs: false
    }
  ]
};

export default dashboard;
