// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const myArray = [1, 2, 3, 10]
console.log('myArray: ', myArray)


const newArray = myArray.map(el => el * 3)

console.log('newArray ', newArray)
console.log('myArray after: ', myArray) // оригинальный массив не меняется