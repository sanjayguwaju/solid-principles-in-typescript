/**
 * Base class representing a bird.
 * This class provides a method for flying.
 */
class Bird {
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
 * This class extends the Bird class but overrides the fly method
 * to indicate that penguins cannot fly.
 */
class Penguin extends Bird {
    /**
     * Simulates the penguin attempting to fly.
     * @throws An error indicating that penguins cannot fly.
     */
    fly(): string {
        throw new Error("Penguins cannot fly");
    }
}

/**
 * Function to make a bird fly.
 * This function takes a Bird object and calls its fly method,
 * then logs the result to the console.
 * @param bird - The Bird object to make fly.
 */
function makeBirdFly(bird: Bird): void {
    console.log(bird.fly());
}

// Create an instance of Bird and make it fly.
const bird = new Bird();
makeBirdFly(bird); // Output: Flying

// Create an instance of Penguin and attempt to make it fly.
const penguin = new Penguin();
makeBirdFly(penguin); // Error: Penguins cannot fly