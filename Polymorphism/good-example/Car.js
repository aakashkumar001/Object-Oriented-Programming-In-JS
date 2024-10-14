import Vehicle from './Vehicle.js';

class Car extends Vehicle {
    constructor(brand, model, year, numberOfDoors) {
        super(brand, model, year); // Call the parent constructor
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
