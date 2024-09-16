// Shape interface to ensure all shapes implement the `area` method
interface Shape {
    area(): number;
  }
  
  // Concrete implementations of shapes
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  class Square implements Shape {
    constructor(private size: number) {}
  
    area(): number {
      return this.size * this.size;
    }
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Area calculator that works with any shape
  class AreaCalculator {
    calculate(shape: Shape): number {
      return shape.area();
    }
  }
  
  // Usage
  const rectangle = new Rectangle(4, 5);
  const square = new Square(4);
  const circle = new Circle(3);
  
  const calculator = new AreaCalculator();
  console.log("Rectangle Area:", calculator.calculate(rectangle)); // Rectangle Area: 20
  console.log("Square Area:", calculator.calculate(square)); // Square Area: 16
  console.log("Circle Area:", calculator.calculate(circle)); // Circle Area: 28.27
  