// Question 3: Find Second Highest Salary Employee.
const employees = [
  {
    id: 1,
    name: "Amit",
    department: "IT",
    salary: 60000,
    address: { city: "Delhi", state: "Delhi" },
    orders: [
      { price: 1000, quantity: 2 },
      { price: 500, quantity: 3 },
    ],
  },
  {
    id: 2,
    name: "Riya",
    department: "HR",
    salary: 50000,
    address: { city: "Mumbai", state: "Maharashtra" },
    orders: [{ price: 2000, quantity: 1 }],
  },
  {
    id: 3,
    name: "Karan",
    department: "IT",
    salary: 80000,
    address: { city: "Delhi", state: "Delhi" },
    orders: [{ price: 1500, quantity: 4 }],
  },
  {
    id: 4,
    name: "Sneha",
    department: "Finance",
    salary: 75000,
    address: { city: "Pune", state: "Maharashtra" },
    orders: [{ price: 3000, quantity: 2 }],
  },
];
// 1. Find the employee who has the second highest salary.
// 2. Return only name and salary.

    let secondEmployee = [...employees].sort( (a, b) => b.salary - a.salary )[1];
    let result = {
        name : secondEmployee.name,
        salary : secondEmployee.salary
    }
    console.log(result);
    

    
