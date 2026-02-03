//19. What happens if two object keys have the same name?

    let obj = {
        name : "Rohit",
        age : 22,
        course : "MERN",
        age : 25
    }
    console.log(obj);

    //Object keys must be unique
    // When JavaScript reads the object:
    // First name is created
    // Second name overwrites the first one
    // JavaScript does not warn or error
    // Silent overwrite happens