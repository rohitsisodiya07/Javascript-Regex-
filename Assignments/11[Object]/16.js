// 16. Create a copy of an object using the spread operator.

    let user = {

        name :"Rohit Sisodiya",
        age : 22,
        city : "Jaipur"
    }

    let another = {...user} ;
    another.name = "Rohit"
    console.log(another);
    console.log(user);
    