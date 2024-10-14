class Motorcycle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log("Motorcycle is starting.");
    }

    stop() {
        console.log("Motorcycle is stopping.");
    }
}

export default Motorcycle;
