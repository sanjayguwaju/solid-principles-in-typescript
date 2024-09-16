/**
 * Class responsible for printing invoices.
 * This class adheres to the Single Responsibility Principle (SRP)
 * by only handling the printing logic.
 */
class InvoicePrinter {
    /**
     * Prints the given invoice string to the console.
     * @param invoice - The invoice string to be printed.
     */
    print(invoice: string): void {
        console.log(invoice);
    }
}

/**
 * Class representing an invoice.
 * This class adheres to the Single Responsibility Principle (SRP)
 * by only handling the invoice data and its operations.
 */
class Invoice {
    private items: string[];

    /**
     * Creates an instance of Invoice.
     * @param items - The list of items in the invoice.
     */
    constructor(items: string[]) {
        this.items = items;
    }

    /**
     * Gets the list of items in the invoice.
     * @returns The list of items.
     */
    getItems(): string[] {
        return this.items;
    }

    /**
     * Prints the invoice using the InvoicePrinter class.
     */
    printInvoice(): void {
        const printer = new InvoicePrinter();
        printer.print(this.items.join(", "));
    }
}

// Example usage:
const invoice = new Invoice(["Item1", "Item2"]);
invoice.printInvoice(); // Output: Item1, Item2
