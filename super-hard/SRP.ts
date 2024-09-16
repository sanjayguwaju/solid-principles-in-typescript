// Responsibility: Order validation
class OrderValidator {
    validateOrder(orderId: number): boolean {
      // Complex validation logic
      console.log(`Order ${orderId} is valid.`);
      return true;
    }
  }
  
  // Responsibility: Inventory management
  class InventoryManager {
    checkInventory(productId: number, quantity: number): boolean {
      // Check inventory for the product
      console.log(`Inventory checked for product ${productId}.`);
      return true;
    }
  }
  
  // Responsibility: Payment processing
  class PaymentGateway {
    processPayment(orderId: number, amount: number): void {
      // Payment processing logic (could involve multiple payment services)
      console.log(`Payment of $${amount} for order ${orderId} processed.`);
    }
  }
  
  // Responsibility: Order fulfillment
  class OrderFulfillment {
    private orderValidator: OrderValidator;
    private inventoryManager: InventoryManager;
    private paymentGateway: PaymentGateway;
  
    constructor(orderValidator: OrderValidator, inventoryManager: InventoryManager, paymentGateway: PaymentGateway) {
      this.orderValidator = orderValidator;
      this.inventoryManager = inventoryManager;
      this.paymentGateway = paymentGateway;
    }
  
    fulfillOrder(orderId: number, productId: number, quantity: number, amount: number): void {
      if (this.orderValidator.validateOrder(orderId) && this.inventoryManager.checkInventory(productId, quantity)) {
        this.paymentGateway.processPayment(orderId, amount);
        console.log(`Order ${orderId} fulfilled.`);
      }
    }
  }
  
  // Usage
  const orderValidator = new OrderValidator();
  const inventoryManager = new InventoryManager();
  const paymentGateway = new PaymentGateway();
  
  const orderFulfillment = new OrderFulfillment(orderValidator, inventoryManager, paymentGateway);
  orderFulfillment.fulfillOrder(101, 1001, 2, 200);
  