// 14. Difference between Object.keys(), Object.values() and Object.entries()?

    let obj = {
        name : "Rohit",
        age : 22,
        course : "MERN"
    }

    //Object.keys() // Return Only Keys
    console.log(Object.keys(obj));
    
    //Object.values() // Return Only Values
    console.log(Object.values(obj));
    
    //Object.entries() // Return Key-Value Pairs
    console.log(Object.entries(obj));