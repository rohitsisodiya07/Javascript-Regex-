
// Question 2: Merge Two Arrays Based on ID

const arr1 = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Riya" }
];

const arr2 = [
  { id: 1, salary: 50000 },
  { id: 2, salary: 60000 }
];

// 1. Merge both arrays based on matching id.
// 2. Final output should contain id, name, and salary.
// 3. Return a new merged array.

const merged = arr1.map( user => {

        const match = arr2.find( s => s.id === user.id )

        return {
            id : user.id,
            name : user. name,
            salary : match ? match.salary : null
        }
})

console.log(merged);
