// 7. Prevent extensions on an object and try adding a new property.

    let obj = {
        name : "Rohit",
        age : 22
    }
    Object.preventExtensions(obj)
    obj.age = 25 ; //Allow
    obj.course = "MERN" ; //Not Allow
    delete obj.name ; //Allow
    
    console.log(obj)
    