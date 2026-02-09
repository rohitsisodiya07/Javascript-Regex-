// 16. How do you copy an object in JavaScript?
    

    //Shallow Copy
    // let obj = {
    //     name : "Rohit",
    //     age : 22
    // }
    // let obj2 = {...obj} ; //Copies Top Level Properties
    // console.log(obj2);
    
    //Deep Copy
    let obj = {
        name : "Rohit",
        age : 22
    }
    let obj2 = structuredClone(obj) ; //Copies NestedProperties
    console.log(obj2);