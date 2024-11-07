// функция с ошибкой - пример
const fnWithError = () => {
    throw new Error('Some error') // генерирует ошибку
}

// ищем ошибку
try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')