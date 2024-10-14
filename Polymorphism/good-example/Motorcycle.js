import Vehicle from './Vehicle.js';

class Motorcycle extends Vehicle {
    constructor(brand, model, year) {
        super(brand, model, year);
    }

    start() {
        console.log("Motorcycle is starting.");
    }

    stop() {
        console.log("Motorcycle is stopping.");
    }
}

export default Motorcycle;
