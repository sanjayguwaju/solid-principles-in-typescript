/**
 * Interface representing a worker.
 * This interface defines a method for working.
 */
interface Workable {
    /**
     * Method to perform work.
     */
    work(): void;
}

/**
 * Interface representing a sleepable entity.
 * This interface defines a method for sleeping.
 */
interface Sleepable {
    /**
     * Method to perform sleep.
     */
    sleep(): void;
}

/**
 * Class representing a human worker.
 * This class implements both Worker and Sleepable interfaces,
 * indicating that a human can both work and sleep.
 */
class HumanEmployee implements Workable, Sleepable {
    /**
     * Implements the work method for a human worker.
     * Logs "Working" to the console.
     */
    work(): void {
        console.log("Working");
    }

    /**
     * Implements the sleep method for a human worker.
     * Logs "Sleeping" to the console.
     */
    sleep(): void {
        console.log("Sleeping");
    }
}

/**
 * Class representing a robot worker.
 * This class implements only the Worker interface,
 * indicating that a robot can only work and does not need to sleep.
 */
class RobotEmployee implements Workable {
    /**
     * Implements the work method for a robot worker.
     * Logs "Working non-stop" to the console.
     */
    work(): void {
        console.log("Working non-stop");
    }
}

// Create an instance of HumanWorker and call its methods.
const humanEmployee = new HumanEmployee();
humanEmployee.work();  // Output: Working
humanEmployee.sleep(); // Output: Sleeping

// Create an instance of RobotWorker and call its method.
const robotEmployee = new RobotEmployee();
robot.work();  // Output: Working non-stop