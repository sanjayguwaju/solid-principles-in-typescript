abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const shapes: Shape[] = [new Rectangle(5, 10), new Circle(7)];
shapes.forEach(shape => console.log(shape.area()));
// Output: 
// 50
// 153.93804002589985
