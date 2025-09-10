// Завдання 2(файл task2.js)
// Створіть масив чисел
// Використовуючи reduce, обчисліть суму всіх елементів масиву.
// Виведіть отриману суму у консоль.

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
    let n = getRandom(-10, 10);
    arr.push(n);
}

let length = parseInt(prompt("Enter a length for array: "), 10);
console.log(numberFill(length,callback));

const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum)