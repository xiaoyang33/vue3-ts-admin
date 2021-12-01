import type { App } from 'vue'
import element from './element'
import globalProperties from './globalProperties'

function install(app: App): void {
  element(app)
  globalProperties(app)
}
export default {
  install
}
