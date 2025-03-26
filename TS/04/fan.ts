// type Factory<T> = T | number | string

// function Factory(typeArg) {
//   return [typeArg, number, string] 
// }

// let b = 1
// b = '1'

function foo<T, U>(a: T, b: U): [T, U] {
  return [a, b]
}

foo(1, '2')
