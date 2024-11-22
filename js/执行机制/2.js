// //提升后
// var myname = undefined
// function showName() {
//     console.log('函数showName执行了');
// }

// // 执行
// showName()
// console.log(myname);
// myname = '小明'



var a = 2
function add() {
    var b =10
    return a + b
}
add()


//--------------------------------
//js引擎读取到代码，创建一个调用栈
// 全局和函数体被v8编译的时候会形成一个全局执行上下文
// 变量环境（var           词法环境（专门放let con声明的变量，不可能存在提升
// a = undefined
// add = function(){}


// 在编译时js只找有效标识符，只认变量的声明

//add()创建了一个add执行上下文
//b = underfined

//------------------------------------

var a = 2
function add(b, c) {
    return b + c
}
function addAll(b, c) {
    var d = 10
    var result = add(b, c)
    return a + result + d
}
addAll(3, 6)