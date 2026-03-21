// 26. Use optional chaining to safely access nested data.

    let detail = {
        name : "Rohit",
        age : 21,
        address : {
            city : "Jaipur",
            state : "Rajasthan"
        }
    }
    console.log(detail?.address?.city?.area);
    