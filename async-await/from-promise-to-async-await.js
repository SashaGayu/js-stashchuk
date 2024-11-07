// PROMISE
/*
    const getData = (url) => new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

    getData('https://jsonplaceholder.typicode.com/todos')
        .then(data => console.log(data)) // data = resolve(json)
        .catch(error => console.log(error.message)) // error = reject(error)
*/


// ASYNC-AWAIT
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
