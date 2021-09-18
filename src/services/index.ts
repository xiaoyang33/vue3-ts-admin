// http://123.207.32.32:8000/home/multidata
import Request from './request'
import cache from '@/utils/cache'
// import './req'
const request = new Request({
  baseURL: 'http://152.136.185.210:5000',
  timeout: 5000,
  interceptors: {
    requestInterceptors(config) {
      const token = cache.get('token') ?? ''

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorsCatch(err) {
      return err
    },
    resopnceInterceptors(res) {
      return res
    },
    resopnceInterceptorsCatch(err) {
      return err
    }
  }
})

export default request
