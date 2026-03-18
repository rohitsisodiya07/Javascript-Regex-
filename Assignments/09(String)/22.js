// 22. Count uppercase letters

    let str = "Rohit Sisodiya" ;
    let count = 0 ;
    for( val of str){
        
        let code = val.charCodeAt(0) ;
        if( code >= 65 && code <= 90) count++;
        
        
    }
    console.log(count);
    