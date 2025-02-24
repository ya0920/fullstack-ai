// export default {
//   // el：该指令绑定在哪个元素上
//   // binding：指令的相关信息，包含该指令绑定的值
//   updated(el, binding) { 
//     if (binding.value.length <= 5) {
//       el.style.color = 'green'
//     } else if (binding.value.length <= 10) {
//       el.style.color = 'yellow'
//     } else {
//       el.style.color = 'red'
//     }
//   }
// }

export default (el, binding) => {  // 同时在 mounted 和 updated 中执行
  if (binding.value.length <= 5) {
    el.style.color = 'green'
  } else if (binding.value.length <= 10) {
    el.style.color = 'yellow'
  } else {
    el.style.color = 'red'
  }
}