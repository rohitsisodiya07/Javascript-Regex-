// 12. What is a nested object? Give an example.
// = Object Within Object.

    let obj = {
        name : "Rohit",
        age : 22,
        address : {
            city : "Jaipur",
            state : "Rajasthan"
        }
    }
    console.log(obj.address);
    console.log(obj.address.city);
    