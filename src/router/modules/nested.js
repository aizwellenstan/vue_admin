/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/admin/products',
  component: Layout,
  redirect: '/admin/products/project/colddate',
  name: 'Products',
  meta: {
    title: 'Products'
  },
  children: [
    {
      path: 'project',
      component: () => import('@/views/admin/products/project/index'), // Parent router-view
      name: 'Project',
      meta: { title: 'Project' },
      redirect: '/products/project/colddate',
      children: [
        {
          path: 'colddate',
          component: () => import('@/views/admin/products/project/colddate'),
          name: 'Colddate',
          redirect: '/products/project/colddate/buildings',
          meta: { title: 'Colddate' },
          children: [
            {
              path: 'buildings',
              component: () => import('@/views/admin/products/project/colddate/buildings'),
              name: 'Buildings',
              meta: { title: 'Buildings' }
            },
            {
              path: 'sensorinf',
              component: () => import('@/views/admin/products/project/colddate/sensorinf'),
              name: 'Sensor Informations',
              meta: { title: 'Sensor Informations' }
            },
            {
              path: 'sensortype',
              component: () => import('@/views/admin/products/project/colddate/sensortype'),
              name: 'Sensor Type',
              meta: { title: 'Sensor Type' }
            }
          ]
        },
        {
          path: 'hotdata',
          component: () => import('@/views/admin/products/project/hotdata'),
          name: 'Hotdata',
          redirect: '/products/project/hotdata/dashboard',
          meta: { title: 'Hotdata' },
          children: [
            {
              path: 'dashboard',
              component: () => import('@/views/admin/products/project/hotdata/dashboard'),
              name: 'Dashboard',
              meta: { title: 'Dashboard' }
            },
            {
              path: ''
            }
          ]
        }
      ]
    }
  ]
}

export default nestedRouter
