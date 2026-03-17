// 13. Find first repeating character

    let str = "programmingp" ;
    let arr = str.split("") ;
    let obj = {} ;
    for( let i = 0 ; i < str.length ; i++){

            if(obj[str[i]]){
                obj[str[i]]++;
            }
            else obj[str[i]] = 1 ;
    }
    console.log(obj);
    
    for( let key in obj){

            if(obj[key] == 1) {
                console.log(key);
                return 0 ;
            }
    }
