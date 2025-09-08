// Завдання 1(файл task1.js)
// Створіть об'єкт calculator, який містить:
// Властивості:
// lastResult – останній обчислений результат (початкове значення null).
// operationsCount – лічильник виконаних операцій (початкове значення 0).
// Методи:
// add(a, b): повертає суму a + b та оновлює lastResult і operationsCount.
// subtract(a, b): повертає різницю a - b та оновлює lastResult і operationsCount.
// multiply(a, b): повертає добуток a * b та оновлює lastResult і operationsCount.
// divide(a, b): повертає результат a / b, якщо b !== 0, інакше "Помилка: ділення на нуль!". Також оновлює lastResult і operationsCount.
// reset(): скидає lastResult до null і operationsCount до 0.
// Використовуйте ці методи для виконання арифметичних операцій, виведіть результати у консоль та перевірте значення lastResult і operationsCount.

import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});

const calculator = {
    lastResult: null,
    operationsCount: 0,
    add(a,b) {
       this.lastResult = a+b;
       ++this.operationsCount;
       return this.lastResult;
    },

      subtract(a, b) {
        this.lastResult = a - b;
       ++this.operationsCount;
        return this.lastResult;
    },

    multiply(a, b) {
        this.lastResult = a * b;
        ++this.operationsCount;
        return this.lastResult;
    },

    divide(a, b) {
        if (b === 0) {
        return "Помилка: ділення на нуль!";
        }
        this.lastResult = a / b;
        ++this.operationsCount;
        return this.lastResult;
    },

    reset() {
        this.lastResult = null;
        this.operationsCount = 0;
    }
}

function askNumber(msg) {
  while (true) {
    const v = parseInt(prompt(msg));
    if (!Number.isNaN(v)) return v;
    console.log("Enter a valid number, please.");
  }
}

const ops = {
  add: (a,b) => calculator.add(a,b),
  subtract: (a,b) => calculator.subtract(a,b),
  multiply: (a,b) => calculator.multiply(a,b),
  divide: (a,b) => calculator.divide(a,b),
  reset: () => (calculator.reset(), "Reset done")
};

while (true) {
  const choice = prompt(
   "Choose operation (add / subtract / multiply / divide / reset / exit): "
  ).trim().toLowerCase();

  if (choice === "exit") break;

  const fn = ops[choice];
  if (!fn) { console.log("Unknown operation."); continue; }

  let result;
  if (choice === "reset") {
    result = fn();
  } else {
    const a = askNumber("Enter first value: ");
    const b = askNumber("Enter second value: ");
    result = fn(a, b);
  }

  console.log("Result:", result);
  console.log("lastResult:", calculator.lastResult, "| operationsCount:", calculator.operationsCount);
}