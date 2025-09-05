/*
Завдання 3(файл task3.js)
Створіть функцію generatePassword, яка:
Приймає один параметр length (довжина пароля).
Генерує випадковий пароль, що складається з:
Великих та малих літер (A-Z, a-z)
Цифр (0-9)
Повертає цей пароль у вигляді рядка.
Викличте функцію з аргументом 8, виведіть згенерований пароль у консоль.
*/

function generatePassword(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

console.log(generatePassword(8))

// Або через імпорт бібліотеки nanoid

import { nanoid } from "nanoid"

console.log(nanoid(20));