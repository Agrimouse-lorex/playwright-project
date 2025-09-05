import getRandom from '../HomeWork3/random.js';

let hour = getRandom(0,23);
console.log("Hour:", hour);

if(hour >= 0 && hour <= 5) {console.log("Good night!")}
else if(hour >= 6 && hour <= 11) {console.log("Good Morning!")}
else if(hour >= 12 && hour <= 17) {console.log("Good day!")}
else if(hour >= 18 && hour <= 23) {console.log("Good evening!")};