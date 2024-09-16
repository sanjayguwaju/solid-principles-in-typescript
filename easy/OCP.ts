/**
 * Base class representing an employee.
 * This class provides a method to calculate the base salary.
 */
class Employee {
    /**
     * Calculates the base salary of the employee.
     * @returns The base salary amount.
     */
    calculateSalary(): number {
        return 5000; // Base salary
    }
}

/**
 * Class representing a developer.
 * This class extends the Employee class and overrides the calculateSalary method
 * to include a bonus specific to developers.
 */
class Developer extends Employee {
    /**
     * Calculates the salary of the developer, including the base salary and a developer bonus.
     * @returns The total salary amount for a developer.
     */
    calculateSalary(): number {
        return super.calculateSalary() + 2000; // Bonus for developers
    }
}

/**
 * Class representing a manager.
 * This class extends the Employee class and overrides the calculateSalary method
 * to include a bonus specific to managers.
 */
class SalaryManager extends Employee {
    /**
     * Calculates the salary of the manager, including the base salary and a manager bonus.
     * @returns The total salary amount for a manager.
     */
    calculateSalary(): number {
        return super.calculateSalary() + 3000; // Bonus for managers
    }
}

// Create an array of employees, including developers and managers.
const employees: Employee[] = [new Developer(), new SalaryManager()];

// Iterate over each employee and print their calculated salary to the console.
employees.forEach(emp => console.log(emp.calculateSalary()));
// Output:
// 7000
// 8000