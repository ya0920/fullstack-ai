function getData() {  //这是异步
    return 'data'
}

async function test() {  //声明了一个可以调用异步的函数
    let data = await getData()
    console.log(data)
}

test()

async function test() {  //不能使用catch，所以要捕获错误，要用try catch
    try {
        let data = await getData()
    } catch (error) {    //error 就是 await getData() 抛出的错误
        console.log(error)
    }
}
