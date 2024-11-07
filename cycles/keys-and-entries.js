/*
* Метод Object.keys() возвращает массив из собственных перечисляемых свойств
* переданного объекта, в том же порядке, в котором они бы обходились циклом
* for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).
*/

/*
* Object.entries() метод возвращает массив собственных перечисляемых свойств
* указанного объекта в формате [key, value], в том же порядке, что и в цикле
* for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов).
*/



const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

console.log(Object.keys(myObject))

// keys (свойства)
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

// values (ключи)
Object.values(myObject).forEach(value => {
    console.log(value)
})

// entries (свойства, ключ)
Object.entries(myObject).forEach(value => {
    console.log(value)
})