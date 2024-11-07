// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

const myArray = [1, 2, 3, 10]
console.log('myArray: ', myArray)


const res = myArray.forEach(el => console.log(el * 2))

console.log('res ', res)
console.log('myArray after: ', myArray)