// generator函数：返回一个迭代器对象
function *foo(x){
    let y = 2 * (yield (x + 1)); // yield: 暂停执行，返回值给调用者
    let z = yield (y / 3); // 暂停执行，返回值给调用者
    return (x + y + z); // 返回值给调用者
}
let it = foo(5); // 返回一个迭代器对象（new Generator）
console.log(it);
console.log(it.next()); // 第一次调用 next()，传入的参数会被忽略，返回 yield 的值
console.log(it.next(12)); // 传入的参数 12 会被赋值给上一个 yield 的返回值，返回下一个 yield 的值
console.log(it.next(13));

// 任何一个数据结构只要具有Symbol.iterator属性，就是迭代器。


//

function ajax(url,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url);
        },1000);
    });
}

function ajax2(url,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url);
        },500);
    });
}

function ajax3(url,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url);
        },700);
    });
}

function *fatch(){
    yield ajax('URL',()=>{});  // 1000
    yield ajax2('URL2',()=>{});  // 500
    yield ajax3('URL3',()=>{});  // 700
}
let it2 = fatch();
let res1=it2.next();
res1.value.then((data)=>{
    let res2=it2.next();
    res2.value.then((data)=>{
        let res3=it2.next();
        res3.value.then((data)=>{
            console.log('done');
        });
    });
});


