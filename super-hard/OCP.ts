// Abstract Payment Method class
abstract class PaymentMethod {
    abstract pay(amount: number): void;
  }
  
  // Concrete payment methods
  class CreditCardPayment extends PaymentMethod {
    pay(amount: number): void {
      console.log(`Paid $${amount} with Credit Card.`);
    }
  }
  
  class PayPalPayment extends PaymentMethod {
    pay(amount: number): void {
      console.log(`Paid $${amount} via PayPal.`);
    }
  }
  
  class BitcoinPayment extends PaymentMethod {
    pay(amount: number): void {
      console.log(`Paid $${amount} with Bitcoin.`);
    }
  }
  
  // PaymentFactory: Open for extension but closed for modification
  class PaymentFactory {
    static createPaymentMethod(method: string): PaymentMethod {
      switch (method) {
        case 'credit':
          return new CreditCardPayment();
        case 'paypal':
          return new PayPalPayment();
        case 'bitcoin':
          return new BitcoinPayment();
        default:
          throw new Error('Payment method not supported.');
      }
    }
  }
  
  // Usage
  const paymentMethod1 = PaymentFactory.createPaymentMethod('credit');
  paymentMethod1.pay(200);
  
  const paymentMethod2 = PaymentFactory.createPaymentMethod('bitcoin');
  paymentMethod2.pay(500);
  