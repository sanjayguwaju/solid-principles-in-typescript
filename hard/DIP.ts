// Abstraction for Notification Service
interface NotificationService {
    sendNotification(message: string): void;
  }
  
  // Concrete Email Notification Service
  class EmailService implements NotificationService {
    sendNotification(message: string): void {
      console.log(`Email sent: ${message}`);
    }
  }
  
  // Concrete SMS Notification Service
  class SMSService implements NotificationService {
    sendNotification(message: string): void {
      console.log(`SMS sent: ${message}`);
    }
  }
  
  // High-level class depends on abstraction, not concrete services
  class Order {
    private notificationService: NotificationService;
  
    constructor(notificationService: NotificationService) {
      this.notificationService = notificationService;
    }
  
    completeOrder(): void {
      console.log("Order completed.");
      this.notificationService.sendNotification("Your order has been completed.");
    }
  }
  
  // Usage
  const emailService = new EmailService();
  const smsService = new SMSService();
  
  const emailOrder = new Order(emailService);
  emailOrder.completeOrder();  // Output: Order completed. Email sent: Your order has been completed.
  
  const smsOrder = new Order(smsService);
  smsOrder.completeOrder();    // Output: Order completed. SMS sent: Your order has been completed.
  