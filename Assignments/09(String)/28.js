// 28. Find duplicate characters

    let str = "programming" ;
    let obj = {} ;
    for( val of str){

        if(obj[val]){
            obj[val]++;
        }
        else{
            obj[val] = 1 ;
        }
    }
    for( let key in obj){

            if( obj[key] > 1 ){
                console.log(key);   
            }
    }