// 19. Create a function that receives an object and prints all values.




    let obj = {
        name :"Rohit",
        age : 21,
        city  :"Jaipur"
    }

    function printObject(obj){

            for( let key in obj){

                console.log(`${key} : ${obj[key]}`);
                
            }
    }
    printObject(obj) ;