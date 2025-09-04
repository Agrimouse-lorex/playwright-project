let age = 5
console.log(age)

function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}


age = getRandom(10, 30)
console.log("Age:", age);

let isAdult;
function adultCheck(age) {
/*    if (age >= 18) {
        return isAdult = true; // My own idea of how to write that function
    } else {
        return isAdult = false;
    }
*/
    isAdult = age >= 18; // simplifying my function
    return isAdult;
}
console.log(adultCheck(age))