// Импортируем default export (по умолчанию) из 'moduleOne.js'
import sumNumbers from './moduleOne.js'
const result = sumNumbers(5, 15)
console.log(result)


// Импортируем именованные экспортируемые переменные `one` и `two` из 'moduleOne.js'.
// Если нужно переименовать переменную, используем `as`, например: `one as oneRenamed`
import {one as oneRenamed, two} from './moduleOne.js'
console.log(oneRenamed, two) // 1 two


