export default class Gadget {
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
