// // console.log(this);


// function foo() {
//   let person = {
//     name: '阿美',
//     age: 18
//   }
//   console.log(this);
// }

// function bar() {
//   let person = {
//     name: '管总',
//     age: 18
//   }
//   foo()
// }

// bar()


function foo() {
  let a = 1
  function bar() {
    console.log(this);
  }
  bar()
}
foo()