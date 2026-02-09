// 22. What is Object.seal()?
// = It Prevents adding and deleting properties, but modifying allows in existing values.

    let user = {
        name : "Rohit",
        age : 22
    }
    Object.seal(user) ;
    user.age = 25 ; // Run
    delete user.name ;
    user.course = "MERN"

    console.log(user);
    
    //isSeal()
    //= Check Object is Sealed  or Not
    console.log(Object.isSealed(user));