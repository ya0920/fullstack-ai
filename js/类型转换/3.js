// let a = []
// if (a) {
//     console.log("a is truthy")
// }

let a = {}
console.log(a);  //ToString(a)  => ToPrimitive(a, ToString)
//[Object Object]



//Number({})   //ToNumber({})  => ToPrimitive({}, Number)