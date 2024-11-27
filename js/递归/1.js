//实现 5！

//用循环
function jc(n) {
    var sum = 1;
    for (var i = 1; i <= n; i++) {
        sum *= i;
    }
    return sum;
}

console.log(jc(5)) //120


//用递归

//5 * jc(4)
//4 * jc(3)
//3 * jc(2)
//2 * jc(1)
//1

function jc(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * jc(n - 1);
    }
}
console.log(jc(5));
