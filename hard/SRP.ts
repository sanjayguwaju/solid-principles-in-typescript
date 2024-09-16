// Responsibility: Logging
class Logger {
    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

// Responsibility: Order processing
class OrderProcessor {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    processOrder(orderId: number): void {
        // Order processing logic
        this.logger.log(`Order ${orderId} processed successfully.`);
    }
}

// Responsibility: Payment processing
class PaymentProcessor {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    processPayment(orderId: number, amount: number): void {
        // Payment processing logic
        this.logger.log(`Payment of $${amount} for order ${orderId} processed.`);
    }
}

// Usage
const logger = new Logger();
const orderProcessor = new OrderProcessor(logger);
const paymentProcessor = new PaymentProcessor(logger);

orderProcessor.processOrder(123);   // Output: [LOG]: Order 123 processed successfully.
paymentProcessor.processPayment(123, 250); // Output: [LOG]: Payment of $250 for order 123 processed.
