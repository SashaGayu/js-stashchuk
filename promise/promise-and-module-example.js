const getData = (url) => new Promise((resolve, reject) =>
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
)

/*
getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data)) // data = resolve(json)
    .catch(error => console.log(error.message)) // error = reject(error)
 */

export default getData