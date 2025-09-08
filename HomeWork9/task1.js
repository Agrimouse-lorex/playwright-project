// Завдання 1
// Створіть клас Gadget, який має такі властивості:
// brand (бренд гаджета)
// model (модель)
// year (рік випуску)
// Додайте метод getInfo(), який повертає рядок із повним описом гаджета.
// Створіть клас Smartphone, який успадковує Gadget і додає нову властивість:
// operatingSystem (операційна система)
// Перевизначте метод getInfo() у Smartphone, щоб він враховував operatingSystem.
// Створіть кілька екземплярів обох класів і викличте getInfo() для кожного.

class Gadget {
    constructor(brand,model,year){
        this.brand = brand,
        this.model = model,
        this.year = year;
    }

    get getInfo(){
        console.log("Gadget info: ", this.brand,this.model,this.year)
    }
}

class Smartphone extends Gadget{
    constructor(brand, model, year, operatingSystem) {
        super(brand,model,year);
        this.operatingSystem = operatingSystem;
    }
    get getInfo() {
         console.log("Gadget info: ", this.brand,this.model,this.year, this.operatingSystem)
    }
}

const laptop = new Gadget("Apple", "MacBook Air", 2022);
const tablet = new Gadget("Samsung", "Galaxy Tab S7", 2021);

const phone1 = new Smartphone("Apple", "iPhone 16", 2023, "iOS");
const phone2 = new Smartphone("Samsung", "Galaxy S23", 2023, "Android");

laptop.getInfo;
tablet.getInfo; 
phone1.getInfo;   
phone2.getInfo; 