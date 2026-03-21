// 17. Merge two objects using Object.assign().

    let user = {
        name : "Rohit",
        age : 21
    }
    let detail = {
        city : "Jaipur"
    }

    let data = Object.assign({}, user, detail)
    console.log(data);
    