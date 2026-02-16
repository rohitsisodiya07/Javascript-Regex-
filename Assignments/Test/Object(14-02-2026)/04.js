// Question 4: Update Nested Object Value

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

// 1. Update the city of employee with id = 2 to "Noida".
// 2. Do not modify other properties.
// 3. Print the updated employee object.

    // let newObj = structuredClone(employees);
    // const emp = newObj.find( e => e.id === 2 ) ;
    // emp.address.city = "Noida" ;
    // console.log(emp);
    
    

    let newObj = employees.map( emp => 

            emp.id === 2 ? {
                        ...emp,
                        address : {
                            ...emp.address,
                            city : "Noida" 
                        }
                    }
            : emp 
    ).find( emp => emp.id === 2) ;
    console.log(newObj);
    