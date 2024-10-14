import INotificationService from './INotificationService.js';

class Order {
    constructor(notificationService) {
        if (!(notificationService instanceof INotificationService)) {
            throw new Error("Invalid notification service");
        }
        this.notificationService = notificationService;
    }

    placeOrder() {
        // Place order logic
        // ...

        // Send email notification
        this.notificationService.sendNotification("Order placed successfully");
    }
}

export default Order;
