// Print digits of numbers line by line.


function printNum(num){

    while(num){
        console.log(num%10);
        num = parseInt( num / 10 ) ;
    }
}
printNum(41541541) ;