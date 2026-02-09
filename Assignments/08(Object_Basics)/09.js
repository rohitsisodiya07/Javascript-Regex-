//9. How do you check if a property exists in an object?

    let user = {
        name : "Rohit",
        age : 25
    }
    console.log("name" in user);
    console.log(user.hasOwnProperty("age"));
    console.log("course" in user);
    