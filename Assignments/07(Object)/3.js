//3. Clone an object and prove it’s not a reference copy.

    let obj = {
        name : "Rohit",
        age : 22
    }
    let obj1 = {...obj} ;
    obj1.age = 25 ;
    console.log(obj1);
    console.log(obj);

    // Original object is unchanged
    // Proof it’s not a reference copy
    