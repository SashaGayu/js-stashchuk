/*
* Синтаксис деструктурирующего присваивания в выражениях JavaScript
* позволяет извлекать данные из массивов или объектов
* при помощи синтаксиса, подобного объявлению массива
* или литералов в объекте.
*/

const useProfile = {
    name: 'Sasha',
    commentsQty: 23,
    hasSignedAgreement: false,
}

let {name, commentsQty} = useProfile
const {hasSignedAgreement} = useProfile

console.log(name)
console.log(commentsQty)