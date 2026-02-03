// 15. Count all nested keys in an object.

     let obj = {

        a : {
            b : {
                c : {
                    d : 1
                }
            }
        }
    }


    function countkeys(obj){
        let count = 0 ;

        for( let key in obj){
            count++;

            if( typeof obj[key] === "object" && obj[key] !== "null"){

                    count += countkeys(obj[key])
            }
        }
        return count ;
    }
    
    let totalKeys = countkeys(obj)
    console.log(totalKeys);
    