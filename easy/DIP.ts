/**
 * Interface representing a generic database.
 * This interface defines a method for connecting to the database.
 */
interface Database {
    /**
     * Method to connect to the database.
     */
    connect(): void;
}

/**
 * Class representing a MySQL database.
 * This class implements the Database interface and provides
 * the specific implementation for connecting to a MySQL database.
 */
class MySQLDatabase implements Database {
    /**
     * Connects to the MySQL database.
     * Logs "Connected to MySQL database" to the console.
     */
    connect(): void {
        console.log("Connected to MySQL database");
    }
}

/**
     * Connects to the MongoDB database.
     * Logs "Connected to MongoDB database" to the console.
     */
class MongoDBDatabase implements Database {
    /**
     * Connects to the MongoDB database.
     * Logs "Connected to MongoDB database" to the console.
     */
    connect(): void {
        console.log("Connected to MongoDB database");
    }
}

/**
 * Class representing an application.
 * This class depends on the Database interface, allowing it to work
 * with any database implementation that adheres to the Database interface.
 */
class Application {
    private database: Database;

    /**
     * Creates an instance of Application.
     * @param database - The database implementation to be used by the application.
     */
    constructor(database: Database) {
        this.database = database;
    }

    /**
     * Starts the application by connecting to the database.
     */
    start(): void {
        this.database.connect();
    }
}

// Create an instance of Application using MySQLDatabase and start the application.
const app1 = new Application(new MySQLDatabase());
app1.start(); // Output: Connected to MySQL database

// Create an instance of Application using MongoDBDatabase and start the application.
const app2 = new Application(new MongoDBDatabase());
app2.start(); // Output: Connected to MongoDB database