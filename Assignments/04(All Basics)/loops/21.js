// Print reverse counting skipping multiples of 3.


function printReverse(num){
    while(num){

        if( !(num % 3 == 0)) console.log(num);
        num-- ;
    }
}
printReverse(1000) ;