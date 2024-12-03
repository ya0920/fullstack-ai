Person.prototype.like = 'kkk'
function Person() {
    this.name = '梁总'
    this.zge = '20'
}

let p = new Person()

console.log(p);

Person.say = function () {
    return '111111'
}

class Person {
    constructor() {  //构造函数
        this.name = '487'
        this.age = 18

    }
    like(){
        return '打第五'
    }
}

let p1 = new Person()
console.log(p1);
