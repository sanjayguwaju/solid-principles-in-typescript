// Segregated interfaces
interface Workable {
    work(): void;
  }
  
  interface Restable {
    rest(): void;
  }
  
  interface Reportable {
    report(): void;
  }
  
  // HumanWorker implements all relevant interfaces
  class HumanWorker implements Workable, Restable, Reportable {
    work(): void {
      console.log("Human is working.");
    }
  
    rest(): void {
      console.log("Human is resting.");
    }
  
    report(): void {
      console.log("Human is reporting work status.");
    }
  }
  
  // RobotWorker only implements Workable and Reportable
  class RobotWorker implements Workable, Reportable {
    work(): void {
      console.log("Robot is working continuously.");
    }
  
    report(): void {
      console.log("Robot is reporting work status.");
    }
  }
  
  // Manager depends on interfaces rather than concrete classes
  class Manager {
    private workers: Workable[];
  
    constructor(workers: Workable[]) {
      this.workers = workers;
    }
  
    manage(): void {
      this.workers.forEach(worker => worker.work());
    }
  }
  
  // Usage
  const human = new HumanWorker();
  const robot = new RobotWorker();
  
  const manager = new Manager([human, robot]);
  manager.manage();
  