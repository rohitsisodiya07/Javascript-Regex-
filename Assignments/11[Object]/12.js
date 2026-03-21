// 12. Loop through an object and print key–value pairs.

    let user = {
        name :"Rohit Sisodiya",
        age : 21,
        city : "Jaipur"
    }
    for( let key in user){

        console.log(`${key} : ${user[key]}`);   
    }