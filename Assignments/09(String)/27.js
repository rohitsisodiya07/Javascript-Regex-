// 27. Check if string contains only alphabets

    let str = "JavaScr7ipt" ;
    for( let val of str){

        let code = val.charCodeAt() ;
        if( !(code >= 65 && code <= 90 || code >= 97 && code <= 123)){

            console.log("Only Alphabets Not Contain");
            return 0 ;
        }
    }
    console.log("Only Alphabet Contain");
    