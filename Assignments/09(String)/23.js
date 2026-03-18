// 23. Count lowercase letters

    let str = "Rohit Sisodiya" ;
    let count = 0 ;
    for( val of str){
        
        let code = val.charCodeAt(0) ;
        if( code >= 97 && code <= 123) count++;
        
        
    }
    console.log(count);