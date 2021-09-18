import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 扩展拦截器类型
interface IInterceptorsConfig {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  resopnceInterceptors?: (res: AxiosResponse) => AxiosResponse
  resopnceInterceptorsCatch?: (error: any) => any
}

interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IInterceptorsConfig
}

export default class {
  instance: AxiosInstance
  interceptors?: IInterceptorsConfig
  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.resopnceInterceptors,
      this.interceptors?.resopnceInterceptorsCatch
    )
    // 全局拦截器
    this.instance.interceptors.request.use((config) => {
      return config
    })
    this.instance.interceptors.response.use((res) => {
      return res
    })
  }
  request(config: IRequestConfig): Promise<any> {
    return new Promise<any>((resolve, resject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance(config)
        .then((res) => {
          if (config.interceptors?.resopnceInterceptors) {
            res = config.interceptors?.resopnceInterceptors(res)
          }
          resolve(res.data)
        })
        .catch((err) => {
          resject(err)
        })
    })
  }
  get(config: IRequestConfig): Promise<any> {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: IRequestConfig): Promise<any> {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config: IRequestConfig): Promise<any> {
    return this.request({ ...config, method: 'DELETE' })
  }
}
