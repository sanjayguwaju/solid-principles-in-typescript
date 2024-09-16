class Logger {
    log(message: string): void {
        console.log(message);
    }
}

class FileWriter {
    write(filename: string, content: string): void {
        console.log(`Writing ${content} to ${filename}`);
    }
}

class Report {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    save(filename: string): void {
        const fileWriter = new FileWriter();
        fileWriter.write(filename, this.content);
    }
}

const report = new Report("This is a report");
report.save("report.txt"); // Output: Writing This is a report to report.txt
