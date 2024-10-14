import Engine from './Engine.js';
import Wheels from './Wheels.js';
import Chassis from './Chassis.js';
import Seats from './Seats.js';

class Car {
    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
        this.chassis = new Chassis();
        this.seats = new Seats();
    }

    startCar() {
        this.engine.start();
        this.wheels.rotate();
        this.chassis.support();
        this.seats.sit();
        console.log("Car started");
    }
}

export default Car;
