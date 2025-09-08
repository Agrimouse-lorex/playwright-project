// Завдання 3: 
// Створіть статичний метод getOldestGadget(gadgetsArray) у класі Gadget, який:
// Приймає масив гаджетів (екземплярів Gadget та Smartphone).
// Повертає гаджет, випущений найраніше.
// Викличте цей метод, передавши масив об'єктів.

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
    static getOldestGadget(gadgetsArray) {
        return gadgetsArray.reduce((oldest, current) => {
            const y = current.year;
            if (typeof y !== "number") return oldest;  
            if (!oldest) return current;                    
            return y < oldest.year ? current : oldest;     
        }, null);
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