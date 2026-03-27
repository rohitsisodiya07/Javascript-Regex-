// 30. Check whether an object is extensible..

    // let user = {
    //     name : "Rohit",
    //     age : 21,
    //     city : "Jaipur"
    // }
    // Object.preventExtensions(user) ;
    // user.name = "Rohan" ; 
    // delete user["city"]
    // user.number = 7877825 // Prevent from add

    // console.log(Object.isExtensible(user));
    

    // console.log(user);
    

    let obj = {
        0 : 1,
        1 : 5,
        2 : 10
    }

    let arr = Object.values(obj).reduce( (acc, curr) => {

        return acc+curr;
    }, 0)
    console.log(arr);
    