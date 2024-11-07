// получаем индекс - лучше использовать forEach!!!!!!!

const myArray = [true, 10, 'abc', null]

for(const key in myArray) {
    console.log(myArray[key])
}