import { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'
import routersEnum from './routers-enum'
import router from './index'

const userMenus: any[] = cache.get('userMenus') || []

interface IMenuItem {
  id: number
  url: string
}
const hasPermissionsRoutes: RouteRecordRaw[] = []

export default function mapMenuToRoutes(): void {
  userMenus.forEach((menu: any) => {
    const mc = menu.children
    const childrenRoutes = routersEnum.children
    mc.forEach((item: IMenuItem) => {
      const route = childrenRoutes?.find((ite) => item.url === ite.path)
      if (route) {
        hasPermissionsRoutes.push({ ...route, children: [] })
      }
    })
  })
  // console.log(hasPermissionsRoutes);

  hasPermissionsRoutes.forEach((item) => {
    router.addRoute('Main', item)
  })
  // routersEnum.children = hasPermissionsRoutes
  // routersEnum.redirect = hasPermissionsRoutes[0].path

  // router.addRoute('main', routersEnum)
  // 刷新后重新跳转路由
  // const hash = location.hash
  // location.href = hash
}

export const firstCheckedMenu = userMenus[0].children[0].url

export const mapPathToMenu = (path: string, menus?: any): any => {
  menus = menus || userMenus
  for (const menu of menus) {
    if (menu.type === 1) {
      const childMenu = mapPathToMenu(path, menu.children)
      if (childMenu) {
        return [menu, childMenu]
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}
