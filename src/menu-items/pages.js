// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Clinical Request',
  caption: '(Enquiry Only)',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Request Enquiry',
      // type: 'collapse',
      type: 'item',
      url: '/page-request/enquiry',
      icon: icons.IconKey,
      // children: [
      //   {
      //     id: 'login3',
      //     title: 'Login',
      //     type: 'item',
      //     url: '/pages/login/login3',
      //     target: true
      //   },
      //   {
      //     id: 'register3',
      //     title: 'Register',
      //     type: 'item',
      //     url: '/pages/register/register3',
      //     target: true
      //   }
      // ]
    },
    {
      id: 'update-status',
      title: 'Update Status',
      type: 'collapse',
      url: '/page-request/status',
      icon: icons.IconKey,
      children: [
        {
          id: 'pg-rq-sts-ackRq',
          title: 'Acknowledge Request',
          type: 'item',
          url: '/page-request/status/acknowledge-request',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-cnclApnt',
          title: 'Cancel Appointment',
          type: 'item',
          url: '/page-request/status/cancel-appointment',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-cnclRg',
          title: 'Cancel Registration',
          type: 'item',
          url: '/page-request/status/cancel-registration',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-dft',
          title: 'Defaulted',
          type: 'item',
          url: '/page-request/status/defaulted',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-cnclRq',
          title: 'Cancel Request',
          type: 'item',
          url: '/page-request/status/cancel-request',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-rg',
          title: 'Registration',
          type: 'item',
          url: '/page-request/status/registration',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-stb',
          title: 'Standby',
          type: 'item',
          url: '/page-request/status/standby',
          // breadcrumbs: true
        },
        {
          id: 'pg-rq-sts-schdApnt',
          title: 'Schedule Appointment',
          type: 'item',
          url: '/page-request/status/schedule-appointment',
          // breadcrumbs: true
        }
      ]
    },
    {
      id: 'record-attendance',
      title: 'Record Attendance',
      type: 'item',
      url: '/page-request/attendance',
      icon: icons.IconKey,
    },
  ]
};

export default pages;
