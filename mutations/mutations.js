// Значения примитивных типов
const a = 10;

let b = a;

b = 30

console.log(a) // 10
console.log(b) // 30

// Значения ссылочного типа
const personA = {
    name: 'Bob',
    age: 21
}

personA.age = 22
personA.isAdult = true

console.log(personA.age) // 22
console.log(personA.isAdult) // true

// Мутирование копий
const personB = {
    name: 'Bob',
    age: 25
}

const person2 = personB

person2.age = 26
person2.isAdult = true

console.log(personB.age) // 26
console.log(personB.isAdult) // true

// Как избежать мутаций