// console.log(a);
// var a = 1;
// //变量的声明提升

// var a = 1;
// function fu(a) {
//     var a = 2;
//     function a() {}
//     var b = a
//     console.log(a);
// }
// fu(3);



function fu(a) {
    var a = function () {}
    console.log(a);
}
fu(3);