// 21. Create an object with another object inside it.

    let detail = {
        name : "Rohit",
        age : 21,
        address : {
            city : "Jaipur",
            state : "Rajasthan"
        }
    }

    for( let key in detail){
        console.log(detail[key]);
        
    }