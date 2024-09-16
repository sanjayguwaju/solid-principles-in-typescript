interface Database {
    connect(): void;
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log("Connected to MySQL database");
    }
}

class MongoDBDatabase implements Database {
    connect(): void {
        console.log("Connected to MongoDB database");
    }
}

class Application {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    start(): void {
        this.database.connect();
    }
}

const app1 = new Application(new MySQLDatabase());
app1.start(); // Output: Connected to MySQL database

const app2 = new Application(new MongoDBDatabase());
app2.start(); // Output: Connected to MongoDB database
