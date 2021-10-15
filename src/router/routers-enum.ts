import type { RouteRecordRaw } from 'vue-router'
import main from '@/views/main/main.vue'
const modules = require.context('./main', false, /\.ts$/)
const children: RouteRecordRaw[] = []

modules.keys().forEach((fileName) => {
  // console.log(modules(fileName).default)
  const module = modules(fileName).default
  children.push(...module)
})

export const Routres: RouteRecordRaw = {
  path: '/main',
  component: main,
  name: 'main',
  children
}

export default Routres
