class Car {
    constructor(brand, model, year, numberOfDoors) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberOfDoors = numberOfDoors;
    }

    start() {
        console.log("Car is starting.");
    }

    stop() {
        console.log("Car is stopping.");
    }
}

export default Car;
