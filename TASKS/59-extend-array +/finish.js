/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum() {
        return this.reduce((acc, item) => acc + item, 0)
    }

    onlyNumbers() {
        return this.filter(item => typeof item === 'number')
    }
}

const sumNumbers = new ExtendedArray(1, 2, 3, 4, 5)
const difineNumbers = new ExtendedArray(1, 'abc', 3, '2wdsa', 5)

console.log(sumNumbers.sum())
console.log(difineNumbers.onlyNumbers())
