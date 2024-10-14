import EmailSender from './EmailSender.js';
import Order from './Order.js';

const emailSender = new EmailSender();
const order = new Order(emailSender);
order.placeOrder();
