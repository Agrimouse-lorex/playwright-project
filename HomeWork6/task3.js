// Завдання 3:(файл task3.js)
// Створіть функцію createCounter(), яка повертає іншу функцію.
// Внутрішня функція:
// Має доступ до змінної count, яка починається з 0.
// При кожному виклику збільшує count на 1 та повертає його.
// Створіть змінну counter та присвойте їй виклик createCounter().
// Викличте counter() кілька разів і виведіть результат.

function createCounter(){
    let count = 1;
    return function() {
        return count++;
    }
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log("------------");
console.log(counter2());
console.log(counter2());
console.log(counter2());