// Завдання 3(файл task3.js)

// Створіть масив чисел
// Використовуючи filter, створіть новий масив, що містить лише парні числа.
// Виведіть результат у консоль.

import getRandom from '../HomeWork3/random.js';
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});
const arr = [];

function numberFill(length,callback){
    while (arr.length < length) {
        callback()
    }

    return arr//.join(", ")
}
function callback(){
    let n = getRandom(-10, 10)
    // n % 2 === 0 ? arr.push(n) : null; - можна було б записати так щоб масив приймав лише парні значення
    arr.push(n);
}

let length = parseInt(prompt("Enter a length for array: "), 10);
console.log(numberFill(length,callback))
const evenNumber = arr.filter((num) => num % 2 === 0);
console.log(evenNumber)

