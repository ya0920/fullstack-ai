let s = new Set(); //类数组，成员是唯一的
s.add(1) //存值
s.add(2)

//s.delete(1) //删除

s.add(1)    //重复值不存，



//s.has(3)   //判断 faluse

            //无法取值
console.log(s);


// //解构
// const arr = [1, 2, 3, 4, 2, 1];
// function unique(arr) {
//     return [...new Set(arr)]                      //Array.from(new Set(arr))
// }
// console.log(unique(arr));
