// Abstract class representing a payment method
abstract class PaymentMethod {
    abstract pay(amount: number): void;
}

// Credit Card Payment Method
class CreditCardPayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} with Credit Card.`);
    }
}

// PayPal Payment Method
class PayPalPayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} via PayPal.`);
    }
}

// New Bitcoin Payment Method (added without modifying existing code)
class BitcoinPayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} with Bitcoin.`);
    }
}

// Payment Processor that works with any payment method
class PaymentProcessor {
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount: number): void {
        this.paymentMethod.pay(amount);
    }
}

// Usage
const creditCard = new CreditCardPayment();
const payPal = new PayPalPayment();
const bitcoin = new BitcoinPayment();

const processor1 = new PaymentProcessor(creditCard);
processor1.processPayment(100);  // Output: Paid $100 with Credit Card.

const processor2 = new PaymentProcessor(payPal);
processor2.processPayment(150);  // Output: Paid $150 via PayPal.

const processor3 = new PaymentProcessor(bitcoin);
processor3.processPayment(200);  // Output: Paid $200 with Bitcoin.
