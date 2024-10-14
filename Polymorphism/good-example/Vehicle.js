class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log("Vehicle is starting.");
    }

    stop() {
        console.log("Vehicle is stopping.");
    }
}

export default Vehicle;
