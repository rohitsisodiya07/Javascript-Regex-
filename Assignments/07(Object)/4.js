//4. Check whether an object is empty or not.

    // let obj = {} ;
    // if(Object.keys(obj).length > 0) console.log("Not Empty");
    // else console.log("Empty");
    
    
    
// Freeze an object and try modifying its properties.
    let obj = {
        name : "Rohit Sisodiya",
        age : 22,
        course : "MERN"
    }
    Object.freeze(obj) ;
    obj.age = 25 ;//Not Modify Because Object is Freeze, We can not  add, delete and modify in freeze state.
    console.log(obj);
    
