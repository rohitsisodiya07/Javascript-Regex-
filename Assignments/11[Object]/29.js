// 29. Seal an object using Object.seal().

    let user = {
        name : "Rohit",
        age : 21,
        city : "Jaipur"
    }
    Object.seal(user) ;
    user.name = "Rohan" ; // Only Modify Happen
    user.number = 7877825

    console.log(Object.isSealed(user));
    

    console.log(user);
    