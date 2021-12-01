import { App } from 'vue'
import { formatDateToStyle } from '@/utils/format'

export default function (app: App) {
  app.config.globalProperties.$filters = {
    formatTime1(date: string) {
      return formatDateToStyle(date)
    }
  }
}
