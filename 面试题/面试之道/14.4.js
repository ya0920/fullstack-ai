function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
      console.log('a');
    }, 1000);
  })
}
// function B() {
//   console.log('b');
// }
// A().then((res) => {
//   console.log(res);
//   B()
// })



var a = new Promise(async(resolve) => {

  const res = await new Promise((resolve) => {})
  console.log(res);
  
  resolve('ok')
  console.log('hello');

})
// console.log(a);
