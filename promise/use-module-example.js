import getDate from './promise-and-module-example.js'
getDate('https://jsonplaceholder.typicode.com/todos/3')
    .then(data => console.log(data)) // data = resolve(json)
    .catch(error => console.log(error.message)) // error = reject(error)
