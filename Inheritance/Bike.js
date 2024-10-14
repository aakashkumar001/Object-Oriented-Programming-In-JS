const Vehicle = require('./Vehicle');


class Bike extends Vehicle {
    constructor(brand, model, year, numberOfWheels) {
        super(brand, model, year);
        this.numberOfWheels = numberOfWheels;
    }
}

const myBike = new Bike("Yamaha", "YZF-R3", 2020, 2);
console.log(myBike.brand);  // Yamaha
console.log(myBike.model);  // YZF-R3
myBike.start();  // Vehicle is starting.