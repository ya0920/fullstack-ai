// console.log(1);

// async function A() {
//     await B()
//     console.log(2);
// }
// async function B() {
//     console.log(3);
// }
// A()

// setTimeout(() => {
//     console.log(4);
// }, 0);

// new Promise((resolve, reject) => {
//     console.log(5);
//     resolve()
// })
//     .then(() => {
//         console.log(6);
//     })
//     .then(() => {
//         console.log(7);
//     })
// console.log(8);


// // 

// console.log('1');

// setTimeout(() => {
//     console.log('2');
//     Promise.resolve().then(() => {
//         console.log('3');
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('4');
//     setTimeout(() => {
//         console.log('5');
//         Promise.resolve().then(() => {
//             console.log('6');
//         });
//     }, 0);
// });

// console.log('7');

// // 1 7 4 2 3 5 6


//
var a
var b = new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
        resolve(2)
    }, 1000)
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(4);
}).then(() => {
    console.log(5);
})

a = new Promise(async (resolve) => {
    console.log(a)
    await b
    // 微任务
    console.log(a)
    await (a)
    resolve('a')
    console.log(6);
})

console.log('end');

// 1 un end 3 4 5 P 