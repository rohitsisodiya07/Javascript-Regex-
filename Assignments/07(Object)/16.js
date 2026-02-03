// 16. Deep clone a nested object.

    let obj = {
        name : "Rohit",
        age : 22,
        address :  {
            city : "Jaipur",
            area : "Shastri Nagar"
        }
    }
    let newObj = structuredClone(obj)
    newObj.address.city = "Jodhpur" ;
    console.log(newObj);
    console.log(obj);
    