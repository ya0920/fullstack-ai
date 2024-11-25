console.log(typeof 'hello');
console.log(typeof 123);
console.log(typeof undefined);
console.log(typeof Symbol(1));
console.log(typeof 111n);
console.log(typeof null); //唯独无法准确判断，二进制判断，object



//引用类型，全是object，判断的不准确
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date);
console.log(typeof function() {});


