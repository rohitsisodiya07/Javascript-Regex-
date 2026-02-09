// 19. How does JSON.stringify() and JSON.parse() work?

    let obj = {
        name : "Rohit",
        age : 22
    }
    //JSON.stringify // Convert Onject into String
    let str = JSON.stringify(obj)
    console.log(str);
    

    //JSON.parse // Convert String into Object
    let newObj = JSON.parse(str) ;
    console.log(newObj);
    
