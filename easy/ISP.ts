interface Worker {
    work(): void;
}

interface Sleepable {
    sleep(): void;
}

class HumanWorker implements Worker, Sleepable {
    work(): void {
        console.log("Working");
    }

    sleep(): void {
        console.log("Sleeping");
    }
}

class RobotWorker implements Worker {
    work(): void {
        console.log("Working non-stop");
    }
}

const human = new HumanWorker();
human.work();  // Output: Working
human.sleep(); // Output: Sleeping

const robot = new RobotWorker();
robot.work();  // Output: Working non-stop
