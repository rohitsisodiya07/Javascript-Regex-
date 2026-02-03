// 13. Access a deeply nested property safely.

    //Using Optional Chaining(?.) //If something is null or undefined, It stops, Returns undefined.
    // Optional chaining (?.) allows safe access to deeply nested properties without throwing errors.

    let obj = {
        name : "Rohit",
        age : 22,
        dob : {
            date : 25,
            month : 3,
            year : 2005
        }
    }
    let date = obj?.dob?.date // Using Optional Chaining(?.)
    console.log(date);
    