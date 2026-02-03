//5. Seal an object and test add/update/delete operations.

    let obj = {
        name : "Rohit Sisodiya",
        age : 22,
        course : "MERN"
    }
    Object.seal(obj)
    obj.age = 25 ; //Only Change
    obj.dob = 2005 ; // Not Add
    delete obj.age ; //Not Delete
    console.log(obj);
    