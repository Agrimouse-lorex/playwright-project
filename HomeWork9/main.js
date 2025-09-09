import Gadget from "./gadget.js";
import Smartphone from "./smartphone.js";

const laptop = new Gadget("Apple", "MacBook Air",1999);
const tablet = new Gadget("Samsung", "Galaxy Tab S7", 2021);

const phone1 = new Smartphone("Apple", "iPhone 16", 2023, "ios");
const phone2 = new Smartphone("Samsung", "Galaxy S23", 2020, "Android");
const phone3 = new Smartphone("Poco", "F7", 2025, "Android OneUI");

const gadgets = [laptop, tablet, phone1, phone2, phone3];
const oldest = Gadget.getOldestGadget(gadgets)

console.log(laptop.getInfo); 
console.log(tablet.getInfo);  
console.log(phone1.getInfo);  
console.log(phone2.getInfo);  
console.log(phone3.getInfo); 

console.log("Oldest gadget:", oldest.getInfo);