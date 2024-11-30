// function foo() {
//   let bar = function() {
//     let baz = () => {
//       let fn = () => {
//         console.log(this);
//       }

//       fn()
//     }

//     baz()
//   }

//   bar()
// }
// foo()



let Foo = () => {
  this.name = '廖总'
}

let foo = new Foo()