// Convert an array of objects into an object using reduce().

    let arr = [
        { Name : "Rohit"},
        { age : 22},
        { Stream : "MERN"},
    ] ;

    let obj = arr.reduce ( (acc, curr) => {

            return Object.assign(acc, curr) ;
    }, {})
    console.log(obj);
    