/*
Завдання 2(файл task2.js)
Створіть функцію checkOrder, яка приймає два параметри:
available (кількість товарів на складі)
ordered (кількість товарів у замовленні)
Функція повертає:
"Your order is too large, we don’t have enough goods." — якщо ordered більше available
"Your order is empty" — якщо ordered дорівнює 0
"Your order is accepted" — якщо товару достатньо
Викличте функцію з різними значеннями available та ordered, виведіть результат у консоль. 
*/

function checkOrder(available,ordered) { 
    if (ordered === 0) {
        return "Your order is empty"
    } else if (available < ordered) {
        return "Your order is too large" 
    } else {
        return "Your order is accepted"
    }
}

console.log(checkOrder(2,0))
console.log(checkOrder(2,1))
console.log(checkOrder(2,3), `Для значення ${checkOrder[0,1]} `)