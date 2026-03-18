// 38. Count digits in string

    let str = "Roh78778it25967" ;
    let count = 0 ;
    for( let val of str){

            if( val >= 0 && val <= 9) count++;
    }
    console.log(count);
    