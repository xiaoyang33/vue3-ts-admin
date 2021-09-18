import { ILogin } from './types'
import request from '@/services'
/**
 * 登录
 * @param data
 * @returns
 */
export function loginRequest(data: ILogin) {
  return request.post({
    url: '/login',
    data
  })
}
/**
 * 获取用户信息
 * @param id
 * @returns
 */
export function requestUserInfo(id: number) {
  return request.get({
    url: `/users/${id}`
  })
}
/**
 * 根据用户id查询权限列表
 * @param id
 * @returns
 */
export function getUserMenu(id: number) {
  return request.get({
    url: `/role/${id}/menu`
  })
}
