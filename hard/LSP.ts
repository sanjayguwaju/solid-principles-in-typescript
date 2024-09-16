// Base class representing a Shape
class Shape {
    area(): number {
      throw new Error("Method not implemented.");
    }
  }
  
  // Rectangle is a Shape and has width and height
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  // Square is a special case of Rectangle
  class Square extends Rectangle {
    constructor(size: number) {
      super(size, size);
    }
  }
  
  // Circle is another type of Shape
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Function to calculate areas for any shape
  function printArea(shape: Shape): void {
    console.log("Area:", shape.area());
  }
  
  // Usage
  const rectangle = new Rectangle(4, 5);
  const square = new Square(4);
  const circle = new Circle(3);
  
  printArea(rectangle);  // Output: Area: 20
  printArea(square);     // Output: Area: 16
  printArea(circle);     // Output: Area: 28.274333882308138
  