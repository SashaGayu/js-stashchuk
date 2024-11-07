// --- Глобальная область видимости

let globalVar = "Я глобальная!";

function exampleFunction() {
    console.log(globalVar); // "Я глобальная!"
}

exampleFunction();
console.log(globalVar); // "Я глобальная!"


// --- Локальная область видимости функции

function exampleFunction() {
    let localVar = "Я внутри функции!";
    console.log(localVar); // "Я внутри функции!"
}

exampleFunction();
console.log(localVar); // Ошибка! localVar не определена за пределами функции


// --- Блочная область видимости

if (true) {
    let blockVar = "Я внутри блока!";
    console.log(blockVar); // "Я внутри блока!"
}

console.log(blockVar); // Ошибка! blockVar не определена за пределами блока



// --- Вложенные области видимости

let outerVar = "Я снаружи!";

function outerFunction() {
    let innerVar = "Я внутри!";

    if (true) {
        let blockVar = "Я в блоке!";
        console.log(outerVar); // "Я снаружи!"
        console.log(innerVar); // "Я внутри!"
        console.log(blockVar); // "Я в блоке!"
    }

    console.log(outerVar); // "Я снаружи!"
    console.log(innerVar); // "Я внутри!"
    // console.log(blockVar); // Ошибка! blockVar не определена здесь
}

outerFunction();
