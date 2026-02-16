
// Question 1: Sort Users by Salary

const users = [
  { id: 1, name: "Amit", age: 28, city: "Delhi", salary: 50000, status: "active", verified: true, email: "amit@gmail.com" },
  { id: 2, name: "Riya", age: 22, city: "Mumbai", salary: 40000, status: "inactive", verified: false, email: "riya@gmail.com" },
  { id: 3, name: "Karan", age: 30, city: "Delhi", salary: 70000, status: "active", verified: true, email: "karan@gmail.com" },
  { id: 4, name: "Sneha", age: 26, city: "Pune", salary: 45000, status: "active", verified: true, email: "sneha@gmail.com" },
  { id: 5, name: "Rahul", age: 24, city: "Mumbai", salary: 60000, status: "inactive", verified: false, email: "rahul@gmail.com" }
];

// Task:
// 1. Sort users by salary in ascending order.
// 2. Sort users by salary in descending order.
// 3. Return only name and salary after sorting.


//1.
    // const newArray = [...users] ;
    // // console.log(newArray);
    // const result = newArray.sort( (a, b) => a.salary - b.salary).map( user => ({ name : user.name, salary : user.salary})) ;
    // console.log(result);
    
//2.
    // let newarr = [...users] ;
    // let sortArr = newarr.sort( (a, b) => b.salary - a.salary ) ;
    // // console.log(sortArr);
    // let getNameSalary = sortArr.map( user => ({ name : user.name, salary : user.salary})) ;
    // console.log(getNameSalary);
    
    