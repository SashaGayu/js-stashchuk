class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2,8,6)
console.log(myArray)
console.log(myArray.sum())