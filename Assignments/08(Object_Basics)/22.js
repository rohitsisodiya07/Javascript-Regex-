// 24. What does Object.preventExtensions() do?
// = Prevents From adding new properties, but modify and delete allows.

    let user = {
        name : "Rohit",
        age : 22
    }
    Object.preventExtensions(user) ;
    user.age = 25 ; // Run
    delete user.name ; //Run
    user.course = "MERN"

    console.log(user);

    //isExtensible()
    //= Check Object is Extensible or Not
    console.log(Object.isExtensible(user));