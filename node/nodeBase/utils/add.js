function add (a, b) {
    return a + b;
}

//抛出了一个对象(习惯用这种)
module.exports = {
    add   // add: add
    //可添加别的函数
}

//或者整体性抛出
// exports.add = function (a, b) {
//     return a + b;
// }