const user = {
    name: 'Ilnar',
    firstName: 'Garaev',
    age: 29,
    city: 'Kazan',
    userHello(name) {
        console.log(`Hello ${name}`)
    }
    
}

console.log(user)

console.log("----------///----------")

console.log(user.userHello('Max'))

console.log("----------///----------")

const users = [
    {
        name: 'Alex',
        age: 21,
        isAdmin: false
    },
    {
        name: 'Ivan',
        age: 20,
        isAdmin: false
    },
    {
        name: 'Sergey',
        age: 14,
        isAdmin: false
    },
    {
        name: 'Niko',
        age: 16,
        isAdmin: true
    }

]

let userGroup = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        userGroup++
    }
}

console.log(`Количество простых пользователей ` + userGroup)

