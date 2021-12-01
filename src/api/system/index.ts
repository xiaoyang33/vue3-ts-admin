import request from '@/services'

export function getSystemUserListApi(
  data: {
    offset: number
    size: number
  } = { offset: 0, size: 10 }
) {
  return request.post({
    url: '/users/list',
    data
  })
}
export function getSystemRoleListApi(
  data: {
    offset: number
    size: number
  } = { offset: 0, size: 10 }
) {
  return request.post({
    url: '/role/list',
    data
  })
}
export function getSysteMenuListApi(
  data: {
    offset: number
    size: number
  } = { offset: 0, size: 10 }
) {
  return request.post({
    url: '/menu/list',
    data
  })
}
