const user ={
    name: 'John',
    age: 30,
    like: {
        n: 'JavaScript',
        m: 'Java'
    }
}

const newUser = structuredClone(user)
user.like.n = 'Python'

console.log(newUser)