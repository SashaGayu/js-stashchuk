// Как избежать мутаций

// вариант №1 - не копирует вложенные объекты, а дает ссылку
console.log('вариант №1')
const personA = {
    name: 'Bob',
    age: 25
}

const personA2 = Object.assign({}, personA); // assign - создает новый объект копируя другой (person)

personA2.age = 26

console.log(personA2.age) // 26
console.log(personA.age) // 25

// вариант №2 - не копирует вложенные объекты, а дает ссылку
console.log('вариант №2')
const personB = {
    name: 'Bob',
    age: 25
}

const personB2 = {...personB}

personB2.name = 'Alice'
console.log(personB2.name) // Alice
console.log(personB.name) // Bob

// вариант №3 - полностью избегает мутаций
console.log('вариант №3')

const personС = {
    name: 'Bob',
    age: 25,
    status: {
        work: true,
        family: false,
    }
}

const personC2 = JSON.parse(JSON.stringify(personС))
// parse - конвертация в объект
// stringify - конвертация в строку

personC2.name = 'Alice'
console.log(personC2.name) // Alice
console.log(personС.name) // Bob

