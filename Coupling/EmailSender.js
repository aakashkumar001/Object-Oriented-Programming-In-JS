import INotificationService from './INotificationService.js';

class EmailSender extends INotificationService {
    sendNotification(message) {
        // Email sending logic
        console.log("Sending email: " + message);
    }
}

export default EmailSender;
