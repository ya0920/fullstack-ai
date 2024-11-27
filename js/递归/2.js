//斐波那契数列
//1 1 2 3 5 8 13 21 34 55 ...
function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
fib(10)
console.log(fib(10));
