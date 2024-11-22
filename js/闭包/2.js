// function bar() {
//     console.log(myname);    
// }
// function foo() {
//     var myname = '卢卡·巴尔萨'
//     bar()
//     console.log(myname)
// }
// var myname = '奈布·萨贝达'
// foo()
//执行上下文有一个outer指针，指向该函数的词法作用域，全局的outer为null

function main() {
    let con = 3;
    function foo() {
        let con = 4;
        function bar() {
            let con = 5;
            console.log(con)
        }
        bar()
     }
     foo()
}
main()
//bar => foo => main =>全局