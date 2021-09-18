import axios from 'axios'
import type { AxiosPromise, AxiosRequestConfig } from 'axios'

const req1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000,
  method: 'POST'
})

export const request = (config: AxiosRequestConfig): AxiosPromise => {
  return req1(config)
}
request({
  url: '/home/multidata'
}).then((res) => {
  console.log(res, 'reeee')
})
console.log('req')
