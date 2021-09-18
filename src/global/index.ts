import type { App } from 'vue'
import element from './element'

function install(app: App): void {
  element(app)
}
export default {
  install
}
