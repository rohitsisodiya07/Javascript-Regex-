// 20. Remove all digits from string

    let str = "Rohit78778Sisodiya25967" ;
    let ans = "" ;
    for( let val of str){
        if( !(val >=0 && val <=9) ){

                ans += val ;
        }
    }
    console.log(ans);
    