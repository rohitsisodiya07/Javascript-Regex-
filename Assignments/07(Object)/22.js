// 22. Convert object values to uppercase without mutating the original object.

    let obj = {

            name : "rohit",
            course : "mern"

    }

    let upper = Object.fromEntries(Object.entries(obj).map( ([key, value]) => [key, value.toUpperCase()]))
    console.log(upper);
        