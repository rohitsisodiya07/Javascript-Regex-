// 23. Add a new key inside a nested object.

    let detail = {
        name : "Rohit",
        age : 21,
        address : {
            city : "Jaipur",
            state : "Rajasthan"
        }
    }
    detail.address.area = "Shastri Nagar" ;

    console.log(detail);
    