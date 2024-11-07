// Оператор for...of выполняет цикл обхода итерируемых объектов
// (включая Array, Map, Set, объект аргументов и подобных),
// вызывая на каждом шаге итерации операторы для каждого значения
// из различных свойств объекта.
// лучше использовать forEach!!!!!!!

// Не для объектов

const myString = 'Hey'
const myArray = [true, 10, 'abc', null]

for(const letter of myString) {
    console.log(letter)
}