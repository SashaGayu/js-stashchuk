const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

myFunction(5, 3) // 9

const multByFactor = (value, multiplier = 1) => value * multiplier

console.log(multByFactor(10, 2)) // 20
console.log(multByFactor(5)) // 5