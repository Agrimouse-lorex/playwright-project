// Завдання 1(файл task1.js)
// Створіть функцію handleNum, яка приймає три параметри:
// num (число)
// handleEven (функція, яка викликається, якщо число парне)
// handleOdd (функція, яка викликається, якщо число непарне)
// Створіть дві функції:
// handleEven → Виводить "Number is even" у консоль.
// handleOdd → Виводить "Number is odd" у консоль.
// Викличте handleNum з довільним числом та передайте дві створені функції.

function handleNum(num, handleEven, handleOdd){
    // if (num % 2 === 0){
    //     handleEven(num);
    // } else {
    //     handleOdd(num);
    // }
    num % 2 === 0 ? handleEven(num) : handleOdd(num);
}

function handleEven(n){
    console.log(`Number ${n} is even`);
}
function handleOdd(n) {
    console.log(`Number ${n} is odd`);
}

handleNum(12, handleEven, handleOdd);