// 18. Use a Symbol as an object key and access it.  

    let id = Symbol["id"] ;
    let obj = {
        name : "Rohit",
        age : 22,
        [id] : 101 //Symbol as key
    }
    console.log(obj[id]); //Access Symbol key
    