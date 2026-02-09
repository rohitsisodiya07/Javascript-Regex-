// 15. What is object destructuring?
// = Extracts object properties into variables easily.

    let obj = {
        name : "Rohit",
        age : 22,
        address : {
            city : "Jaipur"
        }
    }
    // let { name, age} = obj ;
    let { name : myName, age : myAge} = obj ;
    console.log(myName, myAge);
    
    //For Nested Destructuring
    let { address : { city } } = obj ;
    console.log(city);
    