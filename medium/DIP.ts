/**
 * Interface representing a notification service.
 * This interface defines a method for sending notifications.
 */
interface NotificationService {
    /**
     * Sends a notification with the given message.
     * @param message - The message to be sent.
     */
    sendNotification(message: string): void;
}

/**
 * Class implementing the NotificationService interface for email notifications.
 * This class provides the specific implementation for sending email notifications.
 */
class EmailService implements NotificationService {
    /**
     * Sends an email notification with the given message.
     * @param message - The message to be sent.
     */
    sendNotification(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

/**
 * Class implementing the NotificationService interface for SMS notifications.
 * This class provides the specific implementation for sending SMS notifications.
 */
class SMSService implements NotificationService {
    /**
     * Sends an SMS notification with the given message.
     * @param message - The message to be sent.
     */
    sendNotification(message: string): void {
        console.log(`SMS sent: ${message}`);
    }
}

/**
 * Class to manage notifications using a specified notification service.
 * This class depends on the NotificationService interface, allowing it to work
 * with any notification service implementation that adheres to the interface.
 */
class NotificationManager {
    private service: NotificationService;

    /**
     * Creates an instance of NotificationManager.
     * @param service - The notification service to be used by the manager.
     */
    constructor(service: NotificationService) {
        this.service = service;
    }

    /**
     * Sends a notification with the given message using the specified notification service.
     * @param message - The message to be sent.
     */
    notify(message: string): void {
        this.service.sendNotification(message);
    }
}

// Create an instance of EmailService and use it with NotificationManager
const emailServiceInstance: NotificationService = new EmailService();
const manager: NotificationManager = new NotificationManager(emailServiceInstance);
manager.notify("Your order has been shipped!");
// Output: Email sent: Your order has been shipped!

// Create an instance of SMSService and use it with NotificationManager
const smsServiceInstance: NotificationService = new SMSService();
const manager2: NotificationManager = new NotificationManager(smsServiceInstance);
manager2.notify("Your order has been delivered!");
// Output: SMS sent: Your order has been delivered!