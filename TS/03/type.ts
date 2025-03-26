// // type  vs  interface

// type MyType = {
//   readonly name: string
//   age: number,
//   sex?: string
// }

// const obj: MyType = {
//   name: '张三',
//   age: 18,
// }

// obj.name = '李四'

type MyType = string | number

let a: MyType = 1

a = '1'