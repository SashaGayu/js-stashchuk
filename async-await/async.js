/*
    async function asyncFn() {
        // Всегда возвращает Промис
    }

    const asyncFn = async ()=> {
        // Всегда возвращает Промис
    }
*/

// пример №1
// const asyncFn = async ()=> {
//     return 'Success!'
// }
//
// asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))


// пример №2 - c ошибкой
const asyncFn = async ()=> {
    throw new Error('There was an error!')
}

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))