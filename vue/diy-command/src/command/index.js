import HighLight from './highlight.js'
import Draggable from './draggable.js'

const directive = { // 汇总指令
  HighLight,
  Draggable
}

export default {
  install(app) {  // app === vue实例
    // 注册指令
    Object.keys(directive).forEach(key => {
      app.directive(key, directive[key]) // 注册(名字， 指令代码)
    })
  }
}



// function install() {}
// let vue = {
//   a: 1,
//   use(fn) {
//     fn(this)
//   }
// }
// vue.use(install)

