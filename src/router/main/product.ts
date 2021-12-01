import type { RouteRecordRaw } from 'vue-router'
const category = () => import('@/views/product/category/category.vue')
const goods = () => import('@/views/product/goods/goods.vue')
const analysis: RouteRecordRaw[] = [
  {
    path: '/main/product/category',
    name: 'category',
    component: category
  },
  {
    path: '/main/product/goods',
    name: 'goods',
    component: goods
  }
]
export default analysis
