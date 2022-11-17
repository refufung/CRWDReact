// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: '',
      title: 'Sample Options',
      type: 'collapse',
      isDim: true,  //[#//]
      isHidden: false,  //[#//]
      icon: icons.IconWindmill,
      children: [
        //[#//]Dashboard
        {
          id: 'default',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        //[#//]Pages
        {
          id: 'authentication',
          title: 'Authentication',
          type: 'collapse',
          icon: icons.IconKey,
          children: [
            {
              id: 'login3',
              title: 'Login',
              type: 'item',
              url: '/pages/login/login3',
              target: true
            },
            {
              id: 'register3',
              title: 'Register',
              type: 'item',
              url: '/pages/register/register3',
              target: true
            }
          ]
        },
        //[#//]Utilities
        {
          id: 'util-typography',
          title: 'Typography',
          type: 'item',
          url: '/utils/util-typography',
          icon: icons.IconTypography,
          breadcrumbs: true
        },
        {
          id: 'util-color',
          title: 'Color',
          type: 'item',
          url: '/utils/util-color',
          icon: icons.IconPalette,
          breadcrumbs: true
        },
        {
          id: 'util-shadow',
          title: 'Shadow',
          type: 'item',
          url: '/utils/util-shadow',
          icon: icons.IconShadow,
          breadcrumbs: true
        },
        {
          id: 'icons',
          title: 'Icons',
          type: 'collapse',
          icon: icons.IconWindmill,
          children: [
            {
              id: 'tabler-icons',
              title: 'Tabler Icons',
              type: 'item',
              url: '/icons/tabler-icons',
              breadcrumbs: true
            },
            {
              id: 'material-icons',
              title: 'Material Icons',
              type: 'item',
              url: '/icons/material-icons',
              breadcrumbs: true
            }
          ]
        },
        //[#//]other
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          icon: icons.IconBrandChrome,
          breadcrumbs: true
        },
        // {
        //   id: 'documentation',
        //   title: 'Documentation',
        //   type: 'item',
        //   url: 'https://ct.gb.io/berry/',
        //   icon: icons.IconHelp,
        //   external: true,
        //   target: true
        // },
        {
          id: 'session-info',
          title: 'Session Info',
          type: 'item',
          url: '/user/session-info',
          icon: icons.IconShadow,
          breadcrumbs: true
        },
        // {
        //   id: 'hello',
        //   title: 'Hello',
        //   type: 'item',
        //   url: '/hello',
        //   icon: icons.IconShadow,
        //   breadcrumbs: true
        // }
      ]
    }
  ]
};

export default other;
