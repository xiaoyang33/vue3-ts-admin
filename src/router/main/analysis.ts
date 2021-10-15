import type { RouteRecordRaw } from 'vue-router'
const overview = () => import('@/views/analysis/overview/overview.vue')
const dashboard = () => import('@/views/analysis/dashboard/dashboard.vue')
const analysis: RouteRecordRaw[] = [
  {
    path: '/main/analysis/overview',
    name: 'overview',
    component: overview
  },
  {
    path: '/main/analysis/dashboard',
    name: 'dashboard',
    component: dashboard
  }
]
export default analysis
