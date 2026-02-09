// 21. What is Object.freeze()?
// = It is Used to make an Object Completely Unchangable.

    let user = {
        name : "Rohit",
        age : 22
    }
    Object.freeze(user) ;
    user.age = 25 ;
    delete user.name ;
    user.course = "MERN"

    console.log(user);

    //isfrozen()
    //= Check Object is Frozen or Not
    console.log(Object.isFrozen(user));
    
    