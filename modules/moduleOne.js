// Экспорт по умолчанию (default export):
const sum = (a, b) => {
    return a + b
}

// Именованный экспорт (named export):
const one = 1
const two = 'two'


// Экспортируем функцию sum по умолчанию
export default sum

// Экспортируем переменные one и two по именованному экспорту
export {
    one,
    two
}
