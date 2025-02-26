function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('A');
            // resolve('yes'); // 状态变更后就无法继续变更，但是会触发reject
            reject('error');
        }, 1000);
    });
}

function B() {
    console.log('B');
}

//? 0ms后 A 就返回了一个 promise 对象，状态为 pending
//? 1000ms后 A 执行完毕，状态变为 resolved
//? then 中的回调函数才会执行
A().then(() =>
    B()
)
    .catch((err) => {
        console.log(err);
    });


class MyPromise {
    constructor(fn) {

        // 2. 存放resolve和reject的值
        this.state = 'pending';
        this.value = null;
        this.error = null;
        this.onFulfilledCallbacks = []; // 存放成功的回调，可能有多个
        this.onRejectedCallbacks = []; // 存放失败的回调

        // 1. 触发 fn
        const resolve = (value) => {
            if (this.state == 'pending') {
                this.value = value; // 存储成功的值，在后面 .then 中有用
                this.state = 'fulfilled'
                this.onFulfilledCallbacks.forEach(fn => fn(value));
            }
        }
        const reject = (error) => {
            if (this.state == 'pending') {
                this.error = error;
                this.state = 'rejected'
                this.onRejectedCallbacks.forEach(fn => fn(error));
            }
        }

        fn(resolve, reject);
    }
    then(onFulfilled, onRejected) {
        // 3. 确认接收的参数是函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }; // 抛出错误

        // 4. then 返回一个新的 promise
        let newPromise = new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {

                // 5. then 被认为是异步的（微任务），但这里只能处理成宏任务
                setTimeout(() => {
                    try {  // 8. 如果then中回调有错误，就会被catch捕获
                        const result = onFulfilled(this.value);

                        // 6. 如果then有返回值
                        if (result instanceof MyPromise) {
                            result.then(resolve, reject);
                        }
                        resolve(result); // 7. 如果then没有返回值，then 的 newPromise 状态就会取决于上一个promise的状态

                    } catch (e) {
                        reject(e);
                    }

                })

            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.error);
                        if (result instanceof MyPromise) {
                            result.then(resolve, reject);
                        }
                        resolve(result);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            if (this.state === 'pending') {
                this.onFulfilledCallbacks.push((value) => {
                    setTimeout(() => {
                        try {
                            const result = onFulfilled(value);
                            if (result instanceof MyPromise) {
                                result.then(resolve, reject);
                            }
                            resolve(result);
                        } catch (e) {
                            reject(e);
                        }
                    })
                });
                this.onRejectedCallbacks.push((error) => {
                    setTimeout(() => {
                        try {
                            const result = onRejected(error);
                            if (result instanceof MyPromise) {
                                result.then(resolve, reject);
                            }
                            resolve(result);
                        } catch (e) {
                            reject(e);
                        }
                    })
                });
            }
        });
        return newPromise;
    }
}

let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 1000);
})
p.then(res => {
    console.log(res, 'then');
})


