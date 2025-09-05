// Завдання 2(файл task2.js)
// Створіть функцію countDown(num), яка приймає одне число num.
// Усередині функції:
// Виведіть num у консоль.
// Викличте countDown(num - 1), якщо num більше 0.
// Функція повинна рекурсивно зменшувати num, доки воно не стане 0.
// Викличте функцію з аргументом 5.

function countDown(num) {
    console.log(num)
    // if (num > 0) {
    //     countDown(num-1);
    // }
    num > 0 && countDown(num-1)
}

countDown(5)