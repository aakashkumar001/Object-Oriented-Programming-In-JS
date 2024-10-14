const Vehicle = require('./Vehicle');


class Car extends Vehicle {
    constructor(brand, model, year, numberOfDoors, numberOfWheels) {
        super(brand, model, year);  // Call the parent class constructor
        this.numberOfDoors = numberOfDoors;
        this.numberOfWheels = numberOfWheels;
    }
}


const myCar = new Car("Toyota", "Camry", 2021, 4, 4);
console.log(myCar.brand);  // Toyota
console.log(myCar.model);  // Camry
myCar.start();  // Vehicle is starting.