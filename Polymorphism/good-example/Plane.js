import Vehicle from './Vehicle.js';

class Plane extends Vehicle {
    constructor(brand, model, year, numberOfDoors) {
        super(brand, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    start() {
        console.log("Plane is starting.");
    }

    stop() {
        console.log("Plane is stopping.");
    }
}

export default Plane;
