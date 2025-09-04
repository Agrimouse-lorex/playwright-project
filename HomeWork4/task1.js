import getRandom from '../HomeWork3/random.js';

let number = getRandom(1,10);
console.log("Generated:", number);

function checkOdd(num){
    if (num % 2 !== 0) {return `Number ${num} is odd`;}
    else {return `Number ${num} is even`;}
}
console.log(checkOdd(number));

let secondNumber = Math.pow(number, 3);

function result(num){
    return num % 2 !== 0
    ? `Number ${num} is odd`
    : `Number ${num} is even`;
}

console.log(result(secondNumber))