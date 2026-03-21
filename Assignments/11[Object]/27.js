// 27. Freeze an object using Object.freeze().


    let user = {
        name : "Rohit",
        age : 21,
        city : "Jaipur"
    }
    Object.freeze(user) ;
    user.name = "Rohan" ; // Not Happen Because Property is Freeze

    console.log(user);
    