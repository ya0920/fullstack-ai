// function myinstanceof(L, R) {
//     if (L.__proto__ === R.prototype) {
//         return true
//     }else{
//         if (L.__proto__.__proto__ === R.prototype) {
//             return true
//         }else{
//             return false
//         }
//         //...
//     }
// }

function myinstanceof(L, R) {
    while (L !== null) {
        L = L.__proto__
        if (L === R.prototype) {
            return true
        }
    }
    return false
}


console.log(myinstanceof([], Array));


// //递归
// function myinstanceof(L, R) {
//     L = L.__proto__

//     if (L === R.prototype) {
//         return true
//     }else{
//         return myinstanceof(L, R)
//     }
// } 