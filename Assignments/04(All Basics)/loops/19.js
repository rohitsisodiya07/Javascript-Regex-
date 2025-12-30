// 69. Print pattern:
// 1
// 12
// 123
// 1234


function printPattern(n){

    for( let i = 0 ; i <= n ; i++){

        let row = "" ;
        for( let j = 0 ; j <= i ; j++){

            if( j >= 1 && j <= (i+1)) row += j ; 
        }
        console.log(row);   
    }
}
printPattern(4) ;