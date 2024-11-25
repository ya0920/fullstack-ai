function pow(x, y) {
    return Math.pow(x, y); //js自带的幂函数方法
}

function add(x, y) {
    return x + y;
}

console.log(add('2', 3));      // 23

//如果用户传进来的是字符串，进行字符串拼接
//所以要进行判断

function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }else {
        return Number(x) + Number(y);   //转换成数字再相加（显示类型转换）
    }
}
console.log(add('2', 3));  //‘hello’，NAN，是number类型（无法表达的数字）