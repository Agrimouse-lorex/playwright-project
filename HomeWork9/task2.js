// Завдання 2: 
// У класі Gadget додайте геттери та сеттери для year:
// Геттер повертає значення.
// Сеттер приймає лише числа від 2000 до поточного року.
// Якщо значення некоректне — виводить "Помилка: некоректний рік" і не змінює year.
// У класі Smartphone зробіть геттер і сеттер для operatingSystem:
// Дозволені значення: "iOS", "Android", "HarmonyOS".
// Якщо передано іншу ОС — "Помилка: недоступна операційна система".
// Використайте ці сеттери для перевірки значень.

class Gadget {
    constructor(brand,model,year){
        this.brand = brand,
        this.model = model,
        this.year = year;
    }
   get year() {
        return this._year;
    }
    get getInfo(){
         return `${this.brand} ${this.model}, ${this.year}`;
    }

    set year(value) {
        if (value < 2000 || value > new Date().getFullYear()) {
            this._year = "Помилка: некоректний рік";
        } else { this._year = value; }
    }
}

class Smartphone extends Gadget{
    constructor(brand, model, year, operatingSystem) {
        super(brand,model,year);
        this.operatingSystem = operatingSystem;
    }
    get getInfo() {
         return `${this.brand} ${this.model}, ${this.year}, ${this.operatingSystem}`;
    }
    get operatingSystem(){
        return this._operatingSystem;
    }

    set operatingSystem(value) {
        const allowedOSMap = {
            ios: "iOS",
            android: "Android",
            harmonyos: "HarmonyOS"
        };

        const normalized = value.toLowerCase(); 

        if (allowedOSMap[normalized]) {
          this._operatingSystem = allowedOSMap[normalized]; 
        } else {
          this._operatingSystem = "Помилка: недоступна операційна система";
        }
    }
}

const laptop = new Gadget("Apple", "MacBook Air",1999);
const tablet = new Gadget("Samsung", "Galaxy Tab S7", 2021);

const phone1 = new Smartphone("Apple", "iPhone 16", 2023, "ios");
const phone2 = new Smartphone("Samsung", "Galaxy S23", 2023, "Android");

console.log(laptop.getInfo); 
console.log(tablet.getInfo);  
console.log(phone1.getInfo);  
console.log(phone2.getInfo);  