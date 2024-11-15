function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);  // 2
    }
    console.log(x);  // 2
}
//if、while这种语句里，除非用let、const声明，才是块级作用域

function varTest() {
    var x = 1;
    if (true) {
        let x = 2;
        console.log(x);  // 2
    }
    console.log(x);  // 1
}
//词法环境维护了一个新的栈，每一个块级作用域都会形成一个块级上下文，入词法环境的栈（维护块级作用域之间的变量不相互冲突）

function foo() {
    var a = 1
    let b = 2
    {
      let b = 3
      var c = 4
      let d = 5
      console.log(a);   //1
      console.log(b);   //3
    }
    console.log(b);    //2（块级上下文出栈）
    console.log(c);    //4
    console.log(d);    //报错no defined
  }
  foo()