/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = -3
const MAX = 7

const myNumbers = [1, 2, 3, 4, 5, 6]

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const addRandomNumberToArray = (arr, min, max) => {
    let newNumber
    do {
        newNumber = generateNumber(min, max)
    } while (myNumbers.includes(newNumber))

    return [...arr, newNumber]
}

const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX)

console.log('UPDATED ARRAY', updatedArray)
console.log('ORIGINAL ARRAY', myNumbers)


