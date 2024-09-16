// Segregated interfaces for different responsibilities
interface Workable {
    work(): void;
  }
  
  interface Eatable {
    eat(): void;
  }
  
  interface Restable {
    rest(): void;
  }
  
  // HumanWorker must work, eat, and rest
  class HumanWorker implements Workable, Eatable, Restable {
    work(): void {
      console.log("Human is working.");
    }
  
    eat(): void {
      console.log("Human is eating.");
    }
  
    rest(): void {
      console.log("Human is resting.");
    }
  }
  
  // RobotWorker only works (does not need to eat or rest)
  class RobotWorker implements Workable {
    work(): void {
      console.log("Robot is working non-stop.");
    }
  }
  
  // Usage
  const humanWorker = new HumanWorker();
  humanWorker.work();  // Output: Human is working.
  humanWorker.eat();   // Output: Human is eating.
  humanWorker.rest();  // Output: Human is resting.
  
  const robotWorker = new RobotWorker();
  robotWorker.work();  // Output: Robot is working non-stop.
  