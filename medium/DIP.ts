interface NotificationService {
    send(message: string): void;
}

class EmailService implements NotificationService {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class SMSService implements NotificationService {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

class NotificationManager {
    private service: NotificationService;

    constructor(service: NotificationService) {
        this.service = service;
    }

    notify(message: string): void {
        this.service.send(message);
    }
}

const emailService = new EmailService();
const manager = new NotificationManager(emailService);
manager.notify("Your order has been shipped!");
// Output: Sending email: Your order has been shipped!

const smsService = new SMSService();
const manager2 = new NotificationManager(smsService);
manager2.notify("Your order has been delivered!");
// Output: Sending SMS: Your order has been delivered!
