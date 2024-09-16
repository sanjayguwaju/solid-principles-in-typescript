interface Reader {
    read(): string;
}

interface Writer {
    write(data: string): void;
}

class FileReader implements Reader {
    read(): string {
        return "File content";
    }
}

class FileWriter implements Writer {
    write(data: string): void {
        console.log(`Writing ${data}`);
    }
}

const reader = new FileReader();
const writer = new FileWriter();

console.log(reader.read()); // Output: File content
writer.write("New file data"); // Output: Writing New file data
