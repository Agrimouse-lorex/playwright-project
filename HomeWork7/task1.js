// Завдання 1(файл task1.js)

// Створіть масив чисел:
// Використовуючи цикл for, підрахуйте кількість:
// Позитивних чисел
// Негативних чисел
// Нулів
// Виведіть результат у консоль у такому форматі:

// Positive Numbers: X
// Negative Numbers: Y
// 0 Numbers: Z
import getRandom from '../HomeWork3/random.js';
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

const number = []

function numberFill(length,callback){
    while (number.length < length) {
        callback()
    }

    return number//.join(", ")
}

function callback(){
    let n = getRandom(-100, 100)
    number.push(n)
}

let length = parseInt(prompt("Enter a length for array: "), 10);
console.log(numberFill(length,callback))

let positives = 0;
let negatives = 0;
let zeros = 0;

for (const num of number) {
  if (num > 0) {
    positives++;
  } else if (num < 0) {
    negatives++;
  } else {
    zeros++;
  }
}

console.log("+ Positive Numbers:, ", positives);
console.log("- Negative Numbers: ", negatives);
console.log("0 Numbers: ", zeros);
