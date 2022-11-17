// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'User Profile',
  type: 'group',
  children: [
    {
      id: 'util-shadow',
      title: 'Common Location List',
      type: 'item',
      url: '/util-profile/common-location-list',
      icon: icons.IconShadow,
      // breadcrumbs: false
    },
    {
      id: 'util-typography',
      title: 'Personal Profile',
      type: 'item',
      isDim: true,  //[#//]
      isHidden: false,  //[#//]
      url: '/util-profile/personal-profile',
      icon: icons.IconTypography,
      // breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Change Password',
      type: 'item',
      isDim: true,  //[#//]
      isHidden: false,  //[#//]
      url: '/util-profile/change-password',
      icon: icons.IconPalette,
      // breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Session Expiration',
      // type: 'collapse',
      type: 'item',
      isDim: true,  //[#//]
      isHidden: false,  //[#//]
      url: '/util-profile/session-expiration',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tabler Icons',
          type: 'item',
          url: '/icons/tabler-icons',
          // breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Material Icons',
          type: 'item',
          url: '/icons/material-icons',
          // breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
