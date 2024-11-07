// Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах


// пример №1

const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)

// пример №2

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button2 = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button2)

