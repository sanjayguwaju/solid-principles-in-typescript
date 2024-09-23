/**
 * Interface representing a bird that can fly.
 */
interface Flyable {
    /**
     * Method to simulate flying.
     * @returns A string indicating the bird is flying.
     */
    fly(): string;
}

/**
 * Class representing a generic bird.
 * This class provides a method for flying.
 */
class Bird implements Flyable {
    /**
     * Simulates the bird flying.
     * @returns A string indicating the bird is flying.
     */
    fly(): string {
        return "Flying";
    }
}

/**
 * Class representing a penguin.
 * This class does not implement the Flyable interface
 * because penguins cannot fly.
 */
class Penguin {
    /**
     * Simulates the penguin swimming.
     * @returns A string indicating the penguin is swimming.
     */
    swim(): string {
        return "Swimming";
    }
}

/**
 * Function to make a bird fly.
 * This function takes a Flyable object and calls its fly method,
 * then logs the result to the console.
 * @param bird - The Flyable object to make fly.
 */
function makeBirdFly(bird: Flyable): void {
    console.log(bird.fly());
}

// Create an instance of Bird and make it fly.
const bird = new Bird();
makeBirdFly(bird); // Output: Flying

// Create an instance of Penguin and make it swim.
const penguin = new Penguin();
console.log(penguin.swim()); // Output: Swimming