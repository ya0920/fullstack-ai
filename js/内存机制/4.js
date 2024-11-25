function fn(person) {
    person.age = 19
    person = {
      name: '美智子',
      age: 19
    }
    return person
  }
const p1 = {
    name: '伊莱',
    age: 18
}
const p2 = fn(p1);
  
console.log(p1); // { name: '伊莱', age: 19 }
console.log(p2);  // { name: '美智子', age: 19 }

//