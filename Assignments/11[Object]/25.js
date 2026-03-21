// 25. Delete a key from a nested object.

    let detail = {
        name : "Rohit",
        age : 21,
        address : {
            city : "Jaipur",
            state : "Rajasthan"
        }
    }
    delete detail["address"]["city"]

    console.log(detail);
    