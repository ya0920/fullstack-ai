// let obj = {
//   name: 'Tom',
//   age: 18
// }

// // obj.name = 'Jerry'

// let {name, age} = obj
// // let name = obj.name
// // let age = obj.age

// console.log(name, age)



let obj = {
  name: 'Tom',
  age: 18,
  like: [
    'coding',
    {x: 'eat'}
  ]
}

// obj.name    obj.like[1].x
let {name, like: [ , {x}]} = obj

console.log(name, x);
