/*
Завдання 1(файл task1.js)
Створіть функцію, яка приймає два параметри: width і height та повертає площу прямокутника.
Реалізуйте функцію трьома способами:
Function Declaration
Function Expression
Arrow Function
Викличте кожну функцію та виведіть результат у консоль.
*/

function declaration (width, height) {
    return width * height;
};
console.log(declaration(3,6));

const expression = function (width, height) {
    return width * height;
};
console.log(expression(2,5));

const arrow = (width, height) => width * height;
console.log(arrow(4,4))