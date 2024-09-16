// Abstractions (interfaces) for Notification and Payment services
interface NotificationService {
    send(message: string): void;
  }
  
  interface PaymentService {
    processPayment(amount: number): void;
  }
  
  // Concrete Email Notification Service
  class EmailNotificationService implements NotificationService {
    send(message: string): void {
      console.log(`Email sent: ${message}`);
    }
  }
  
  // Concrete SMS Notification Service
  class SMSNotificationService implements NotificationService {
    send(message: string): void {
      console.log(`SMS sent: ${message}`);
    }
  }
  
  // Concrete Credit Card Payment Service
  class CreditCardPaymentService implements PaymentService {
    processPayment(amount: number): void {
      console.log(`Paid $${amount} with Credit Card.`);
    }
  }
  
  // Concrete PayPal Payment Service
  class PayPalPaymentService implements PaymentService {
    processPayment(amount: number): void {
      console.log(`Paid $${amount} via PayPal.`);
    }
  }
  
  // Order class that depends on abstractions (NotificationService and PaymentService)
  class Order {
    private notificationService: NotificationService;
    private paymentService: PaymentService;
  
    constructor(notificationService: NotificationService, paymentService: PaymentService) {
      this.notificationService = notificationService;
      this.paymentService = paymentService;
    }
  
    completeOrder(amount: number): void {
      console.log("Order completed.");
      this.paymentService.processPayment(amount);
      this.notificationService.send("Your order has been completed.");
    }
  }
  
  // Usage
  const notificationService = new EmailNotificationService();
  const paymentService = new CreditCardPaymentService();
  
  const order = new Order(notificationService, paymentService);
  order.completeOrder(300);
  