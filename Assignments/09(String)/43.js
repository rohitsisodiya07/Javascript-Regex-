// 43. Find common characters between two strings

    let str1 = "Rohit" ;
    let str2 = "Sisodiya" ;

    let result = "" ;

    for( let val of str1){

        if(str2.includes(val)){
            result+=val ;
        }
    }
    console.log(result);
    