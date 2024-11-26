let person = {
    name: 'John',
    age: 30,
    address: {
        street: 'Main St',
        city: 'New York'
    }
};
function shallowCopy(obj) {
    let res = {};
    for (let key in obj) {  
        if (obj.hasOwnProperty(key)) {
            res[key] = obj[key];//res.key 和 res[key] 有区别，赋值时有区别，一个key是属性名称一个key是变量
        }
    }  
        
    return res;
}
console.log(shallowCopy(person));

//显示和隐式都遍历到了
for (let key in obj) {
    //所以要判断 key 是不是 obj 显式拥有的属性    
    //if (!obj.hasOwnProperty(key)) continue;  //返回布尔值
    console.log(key);
}