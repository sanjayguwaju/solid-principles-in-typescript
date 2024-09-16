class Bird {
    fly(): string {
        return "Flying";
    }
}

class Penguin extends Bird {
    // Penguins cannot fly
    fly(): string {
        throw new Error("Penguins cannot fly");
    }
}

function makeBirdFly(bird: Bird): void {
    console.log(bird.fly());
}

const bird = new Bird();
makeBirdFly(bird); // Output: Flying

const penguin = new Penguin();
makeBirdFly(penguin); // Error: Penguins cannot fly
