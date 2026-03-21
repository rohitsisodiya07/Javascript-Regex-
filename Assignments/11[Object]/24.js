// 24. Update a value inside a nested object..

    let detail = {
        name : "Rohit",
        age : 21,
        address : {
            city : "Jaipur",
            state : "Rajasthan"
        }
    }
    detail.address.city = "Jaipur City" ;

    console.log(detail);
    