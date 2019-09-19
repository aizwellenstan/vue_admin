import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/register/'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views'),
        name: 'Home',
        meta: { title: 'Home', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/products',
    children: [
      {
        path: 'ourproducts',
        component: () => import('@/views/ourproducts'),
        name: 'Products',
        meta: { title: 'Products', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/solutions',
    children: [
      {
        path: 'solutions',
        component: () => import('@/views/solutions'),
        name: 'Solutions',
        meta: { title: 'Solutions', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/madewithnadi',
    children: [
      {
        path: 'madewithnadi',
        component: () => import('@/views/madewithnadi'),
        name: 'Made with Nadi',
        meta: { title: 'Made with Nadi', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/cctv',
    children: [
      {
        path: 'cctv',
        component: () => import('@/views/cctv'),
        name: 'Cctv',
        meta: { title: 'Cctv', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/learn',
    children: [
      {
        path: 'learn',
        component: () => import('@/views/learn'),
        name: 'Learn',
        meta: { title: 'Learn', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/community',
    children: [
      {
        path: 'community',
        component: () => import('@/views/community'),
        name: 'Community',
        meta: { title: 'Community', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/basicmodule',
    children: [
      {
        path: 'basicmodule',
        component: () => import('@/views/basicmodule'),
        name: 'Basic Module',
        meta: { title: 'Basic Module', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/legal',
    children: [
      {
        path: 'legal',
        component: () => import('@/views/legal'),
        name: 'Legal',
        meta: { title: 'Legal', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/privacypolicy',
    children: [
      {
        path: 'privacypolicy',
        component: () => import('@/views/privacypolicy'),
        name: 'PrivacyPolicy',
        meta: { title: 'PrivacyPlicy', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/addseats',
    children: [
      {
        path: 'addseats',
        component: () => import('@/views/admin/addseats'),
        name: 'Addseats',
        meta: { title: 'Addseats', affix: true }
      }
    ]
  },
  {
    path: '/admin/myaccount',
    component: Layout,
    redirect: '/admin/myaccount/settings',
    alwaysShow: true, // will always show the root menu
    name: 'My Account',
    meta: {
      title: 'My Account',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'accountinf',
        component: () => import('@/views/admin/myaccount/accountinf'),
        name: 'Account Information',
        meta: {
          title: 'Account Information',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'settings',
        component: () => import('@/views/admin/myaccount/settings'),
        name: 'Settings',
        meta: {
          title: 'Settings',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'privacy',
        component: () => import('@/views/admin/myaccount/privacy'),
        name: 'Privacy',
        meta: {
          title: 'Privacy'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'security',
        component: () => import('@/views/admin/myaccount/security'),
        name: 'Security',
        meta: {
          title: 'Security',
          roles: ['admin']
        }
      },
      {
        path: 'myseats',
        component: () => import('@/views/admin/myaccount/myseats'),
        name: 'My Seats',
        meta: {
          title: 'My Seats',
          roles: ['admin']
        }
      },
      {
        path: 'redeem',
        component: () => import('@/views/admin/myaccount/redeem'),
        name: 'Redeem a product code',
        meta: {
          title: 'Redeem a product code',
          roles: ['admin']
        }
      }
    ]
  },
  nestedRouter,
  // {
  //   path: '/products',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Products',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'Project',
  //       meta: {
  //         title: 'Project',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }
  //   ]
  // },
  {
    path: '/admin',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/admin/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboards', affix: true }
      }
    ]
  },
  {
    path: '/admin/organizations',
    component: Layout,
    redirect: '/admin/organizations/members',
    alwaysShow: true, // will always show the root menu
    name: 'Organizations',
    meta: {
      title: 'Organizations',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'members',
        component: () => import('@/views/admin/organizations/members'),
        name: 'Members & Groups',
        meta: {
          title: 'Members & Groups',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'subscriptions',
        component: () => import('@/views/admin/organizations/subscriptions'),
        name: 'Subscriptions & Serives',
        meta: {
          title: 'Subscriptions & Serives'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'service',
        component: () => import('@/views/admin/organizations/service'),
        name: 'Service Usage',
        meta: {
          title: 'Service Usage',
          roles: ['admin']
        }
      },
      {
        path: 'edit',
        component: () => import('@/views/admin/organizations/edit'),
        name: 'Edit Organization',
        meta: {
          title: 'Edit Organization',
          roles: ['admin']
        }
      },
      {
        path: 'payment',
        component: () => import('@/views/admin/organizations/payment'),
        name: 'Payment Methods',
        meta: {
          title: 'Payment Methods',
          roles: ['admin']
        }
      },
      {
        path: 'transaction',
        component: () => import('@/views/admin/organizations/transaction'),
        name: 'Transaction History',
        meta: {
          title: 'Transaction History',
          roles: ['admin']
        }
      },
      {
        path: 'payout',
        component: () => import('@/views/admin/organizations/payout'),
        name: 'Payout Profile',
        meta: {
          title: 'Payout Profile',
          roles: ['admin']
        }
      }
    ]
  }
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'BOARD', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'Guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'Profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
