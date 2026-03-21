// 28. Check whether an object is frozen..


    let user = {
        name : "Rohit",
        age : 21,
        city : "Jaipur"
    }
    Object.freeze(user) ;
    user.name = "Rohan" ; // Not Happen Because Property is Freeze

    console.log(Object.isFrozen(user));
    

    console.log(user);
    