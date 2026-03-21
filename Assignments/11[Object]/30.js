// 30. Check whether an object is extensible..

    let user = {
        name : "Rohit",
        age : 21,
        city : "Jaipur"
    }
    Object.preventExtensions(user) ;
    user.name = "Rohan" ; 
    delete user["city"]
    user.number = 7877825 // Prevent from add

    console.log(Object.isExtensible(user));
    

    console.log(user);
    