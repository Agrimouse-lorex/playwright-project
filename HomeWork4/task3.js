import getRandom from '../HomeWork3/random.js';
import moment from 'moment';
import 'moment/locale/uk.js';

let dayNumber = getRandom(1,7);
console.log("Day:", dayNumber);

// зробити цю задачу через switch/case 
switch(dayNumber){
    case 1:
    console.log("Понеділок");
    break;
    case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П’ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;
  default:
    console.log("Incorrect value");
}

// Цей варіант мені суто для тренування

let dayName = moment().day(dayNumber).locale('uk').format('dddd');

console.log(`dayNumber: ${dayNumber}`);
console.log(`День тижня: ${dayName[0].toUpperCase()}${dayName.slice(1)}`);