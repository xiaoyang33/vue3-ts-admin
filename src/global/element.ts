import type { App } from 'vue'
// import 'element-plus/theme-chalk/base.css'
import 'element-plus/dist/index.css'

// import {
//   ElMessage,
//   ElButton,
//   ElTable,
//   ElInput,
//   ElForm,
//   ElSelect,
//   ElCheckbox,
//   ElTabs
// } from 'element-plus'
// import ElementPlus from 'element-plus'
// console.log(ElementPlus);

const ElementPlus = require('element-plus')
// const components = [
//   ElMessage,
//   ElButton,
//   ElTable,
//   ElInput,
//   ElForm,
//   ElSelect,
//   ElCheckbox,
//   ElTabs
// ]

export default function (app: App): void {
  // components.forEach((component) => {
  //   app.component(component.name, component)
  // })
  app.use(ElementPlus)
}
