import Car from './Car.js';
import Motorcycle from './Motorcycle.js';

const myCar = new Car("Toyota", "Camry", 2021, 4);
const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2021);

myCar.start();        // Output: "Car is starting."
myMotorcycle.start(); // Output: "Motorcycle is starting."
