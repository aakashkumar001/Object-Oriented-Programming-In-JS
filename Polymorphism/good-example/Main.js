import Car from './Car.js';
import Motorcycle from './Motorcycle.js';
import Plane from './Plane.js';

const myCar = new Car("Toyota", "Camry", 2021, 4);
const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2021);
const myPlane = new Plane("Boeing", "737", 2020, 2);

myCar.start();        // Output: "Car is starting."
myMotorcycle.start(); // Output: "Motorcycle is starting."
myPlane.start();      // Output: "Plane is starting."

myCar.stop();         // Output: "Car is stopping."
myMotorcycle.stop();  // Output: "Motorcycle is stopping."
myPlane.stop();       // Output: "Plane is stopping."
