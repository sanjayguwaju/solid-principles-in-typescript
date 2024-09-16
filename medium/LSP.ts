class Rectangle {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(size: number) {
        super(size, size);
    }

    setWidth(width: number): void {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number): void {
        this.height = height;
        this.width = height;
    }
}

const square = new Square(10);
console.log(square.area()); // Output: 100
square.setWidth(5);
console.log(square.area()); // Output: 25
