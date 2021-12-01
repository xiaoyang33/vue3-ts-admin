/* eslint-disable */
// import { Ifilter } from './global/globalProperties'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare const $filters:any

