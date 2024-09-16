class InvoicePrinter {
    print(invoice: string): void {
        console.log(invoice);
    }
}

class Invoice {
    private items: string[];

    constructor(items: string[]) {
        this.items = items;
    }

    getItems(): string[] {
        return this.items;
    }

    printInvoice(): void {
        const printer = new InvoicePrinter();
        printer.print(this.items.join(", "));
    }
}

const invoice = new Invoice(["Item1", "Item2"]);
invoice.printInvoice(); // Output: Item1, Item2
