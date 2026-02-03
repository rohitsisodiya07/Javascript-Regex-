// 11. Remove all properties with null or undefined values.

    let obj = {
        name : "Rohit",
        age : null,
        course : undefined,
        dob : 2005
    }
    for(let key in obj){

        if(obj[key] === null || obj[key] === undefined){
            delete obj[key];
        }
    }
    console.log(obj);
    