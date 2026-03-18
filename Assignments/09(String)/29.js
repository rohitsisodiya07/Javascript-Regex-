// 29. Compress string "aaabb" → "a3b2"

     let str = "aaabbaabbccddd" ;
     let count = 1 ;
     let ans = "" ;
    let obj = {} ;
    let i = 0 ;
    for( let j = 1 ; j < str.length ; j++ ){

            if( str[i] !== str[j]){

                ans += str[i] ;
                ans += count ;
                i = j ;
                count = 1 ;
            }
            else{
                count++;
            }
    }
    ans += str[i] ;
    ans += count ;
    console.log(ans);
    
    