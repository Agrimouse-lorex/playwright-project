import Gadget from "./gadget.js";

export default class Smartphone extends Gadget{
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

