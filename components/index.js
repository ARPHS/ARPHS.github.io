import MyButtonOpt from "./MyButton/MyButton.js"
import ParentButtonOpt from "./ParentButton/ParentButton.js"

//组件全局注册
Vue.component('my-button',MyButtonOpt)
Vue.component('parent-button',ParentButtonOpt)

//导出用于局部注册
export const MyButton = MyButtonOpt
export const ParentButton = ParentButtonOpt

