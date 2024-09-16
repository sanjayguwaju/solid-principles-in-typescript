class Employee {
    calculateSalary(): number {
        return 5000; // Base salary
    }
}

class Developer extends Employee {
    calculateSalary(): number {
        return super.calculateSalary() + 2000; // Bonus for developers
    }
}

class Manager extends Employee {
    calculateSalary(): number {
        return super.calculateSalary() + 3000; // Bonus for managers
    }
}

const employees: Employee[] = [new Developer(), new Manager()];
employees.forEach(emp => console.log(emp.calculateSalary()));
// Output:
// 7000
// 8000
