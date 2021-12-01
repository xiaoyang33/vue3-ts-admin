import request from '@/services'

export function getGoodsListApi(data: any) {
  return request.post({
    url: '/goods/list',
    data
  })
}
