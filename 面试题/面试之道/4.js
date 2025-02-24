// 默认绑定，独立调用
var a = 1 // 挂在全局对象上

function foo() {
    console.log(this.a);

}

function bar() {
    var a = 2;
    foo();
}

bar(); // window 环境为 1, node 环境为 undefined

//2
var a = 1

function bar() {
    var a = 2;

    function foo() {
        console.log(this.a);
    }
    return foo;
}
const baz = bar();
baz(); // window 环境为 1, node 环境为 undefined


// 3,非独立调用
var a = 1
let obj = {
    a: 2,
    fn: foo
}
function foo() {
    console.log(this.a);
}
obj.fn(); // 2


// 4
var a = 1
let obj1 = {
    a: 2,
    fn: foo
}
let obj2 = {
    a: 3,
    fm: obj1
}
function foo() {
    console.log(this.a);
}
obj2.fm.fn();  // 2 就近原则

// 5
let obj3 = {
    a: 2
}

function foo() {
    console.log(this.a);
}

foo(); // window 环境为 1, node 环境为 undefined
foo.call(obj3); // 
foo.apply(obj3); //
foo.bind(obj3)(); // bind 返回一个新的函数，不会立即执行


// 6
let obj4 = {
    a: 2
}

function foo(x, y) {
    console.log(this.a, x + y);
}

foo(2, 5);
foo.call(obj4, 2, 5);
foo.apply(obj4, [2, 5]);
foo.bind(obj4, 2, 5)();

// 7 call
Function.prototype.mycall = function (context, ...args) {
    if (typeof (this) !== 'function') {
        throw new TypeError('not a function');
    }
    context = context || window;
    const key = Symbol('fn');
    context[key] = this;
    const res = context[key](...args); // 保存返回值
    delete context[key];
    return res;
}

// 8 apply
Function.prototype.myapply = function (context, args) {
    if (typeof (this) !== 'function') {
        throw new TypeError('not a function');
    }
    context = context || window;
    const key = Symbol('fn');
    context[key] = this;
    const res = context[key](...args); // 保存返回值
    delete context[key];
    return res;
}

// 9 bind
Function.prototype.mybind = function (context, ...args) {
    if (typeof (this) !== 'function') {
        throw new TypeError('not a function');
    }
    context = context || window;
    const self = this;
    // 被 new 调用 返回 foo 的实例
    return function (...newArgs) {  // 不能用箭头函数，箭头函数没有this
        self.apply(context, args.concat(newArgs));
    }
}