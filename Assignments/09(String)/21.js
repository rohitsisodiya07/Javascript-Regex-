// 21. Extract numbers from string

    let str = "Rohit78778Sisodiya25967" ;
    let num = "" ;
    for( let val of str){

        if( val >= 0 && val <= 9) num +=val ;
    }
    console.log(num);
    