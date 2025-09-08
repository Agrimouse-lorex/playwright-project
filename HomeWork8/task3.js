// Завдання 3(файл task3.js)
// Створіть об'єкт person з такими властивостями:
// firstName
// lastName
// age
// Додайте до об'єкта властивість email.
// Видаліть властивість age.
// Виведіть оновлений об'єкт у консоль.

import { Agent } from "http";

const person = {
    firstName: 'Alex',
    lastName: 'Milk',
    Age: '25',
}

person.email = "alex.milk@example.com"
delete person.Age;

console.log(person);