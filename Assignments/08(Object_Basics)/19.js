// 20. What happens when you assign one object to another variable?

// When You Assign one Object to another variable, both point to same object in memory.

    let obj = {
        name : "Rohit",
        age : 22
    }
    let obj2 = obj ;
    obj2.age = 25 ; //Change in Both
    console.log(obj);
    console.log(obj2);
    