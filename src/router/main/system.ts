import type { RouteRecordRaw } from 'vue-router'
const user = () => import('@/views/system/user/user.vue')
const department = () => import('@/views/system/department/department.vue')
const menu = () => import('@/views/system/menu/menu.vue')
const role = () => import('@/views/system/role/role.vue')

const system: RouteRecordRaw[] = [
  {
    path: '/main/system/user',
    name: 'user',
    component: user
  },
  {
    path: '/main/system/department',
    name: 'department',
    component: department
  },
  {
    path: '/main/system/menu',
    name: 'menu',
    component: menu
  },
  {
    path: '/main/system/role',
    name: 'role',
    component: role
  }
]

export default system
