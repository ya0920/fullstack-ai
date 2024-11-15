function foo() {
    function bar() {
        var a = 1;
        console.log(b);
    }
    var b = 2
    return bar
}
const baz = foo() // baz为bar,foo()执行完毕，执行上下文销毁
baz()             //b要去bar的词法作用域找，foo()执行上下文被销毁，留下了闭包