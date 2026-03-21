// 7. Check if the key email exists in an object.

    let user = {

        name : "Rohit",
        age : 21,
        email : "rohitsisodiya2503@gmail.com"
    }

    console.log("email" in user);
    console.log(user.hasOwnProperty("email"));
    