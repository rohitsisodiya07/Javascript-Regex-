// 8. Convert an array of objects into a single object.

    let arr = [
        {name : "Rohit", age : 22},
        { course : "MERN", dob : 2005} 
    ]
    
    let obj = Object.assign({}, ...arr)
    console.log(obj);
    