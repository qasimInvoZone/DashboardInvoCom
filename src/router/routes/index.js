import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/apps/chat',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/leads',
    component: lazy(() => import('../../views/Leads'))
  },
  {
    path: '/meetings',
    component: lazy(() => import('../../views/Meeting'))
  },
  {
    path: '/analytics',
    component: lazy(() => import('../../views/Analytics'))
  },
  {
    path: '/setting',
    component: lazy(() => import('../../views/Setting'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
