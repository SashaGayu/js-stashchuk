/*
* Функция может быть:
* 1. именованной
* 2. присвоена переменной
* 3. анонимной
* 4. аргументом при вызове другой функции
* 5. значением свойства (метода) объекта
*/

/*
* Правила работы с функциями
* 1. Называть функции исходя из выполняемых задач
* 2. Одна функция должна выполнять одну задачу
* 3. Не рекомендуется изменять внешние относительно функции переменные
*/

// Колбэк функции, ее смысл в том, что она вызывается внутри другой функции
function anotherFunction() {
    console.log('hello world')
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)


// Пример
function printMyName() {
    console.log('Oleksandr')
}


setTimeout(printMyName, 2000)
