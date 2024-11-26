// let obj = {        //对象不能存在重复的key
//     name: 'Joker',
//     age: 18,
//     city: '广州'
// }
// //console.log(obj);


// let obj = {
//     1: 0,
//     2: 1,
//     3: 2,
//     2: 3,
//     1: 4
// }
// console.log(Object.keys(obj));  //对象这种数据结构的 key 只能是字符串


let arr = [1, 2, 3, 2, 1]
function unique(arr) {
    // let obj = {}
    // for (let i = 0; i < arr.length; i++) {
    //     if (!obj[arr[i]]) {          // 判断对象中是否有该key，我们可以通过读取对象的属性值是否存在来判断是否存在相同的值
    //         obj[arr[i]] = true;
    //     }
    // }
    // return Object.keys(obj).map(Number)
    let obj = {}
    return arr.filter((item, index, arr) => {
        return obj[item] ? false : (obj[item] = true)
    })
}
console.log(unique(arr));


