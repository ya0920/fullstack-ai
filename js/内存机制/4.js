function fn(person) {
    person.age = 19
    person = {
      name: '庆玲',
      age: 19
    }
    return person
  }
const p1 = {
    name: '凤如',
    age: 18
}
const p2 = fn(p1)
  
console.log(p1);
console.log(p2);

//