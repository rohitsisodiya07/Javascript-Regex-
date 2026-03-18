// 31. Find longest substring without repeating characters.


        let str = "abcabcdebb" ;
        let result = "";
        let largest = "" ;
        for( let ch of str){

                while( result.includes(ch)){
                    result = result.slice(1);
                }
                result += ch ;
                if( result.length > largest.length){
                    largest = result ;
                }
        }
        console.log(largest);
        