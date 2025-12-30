// Find LCM of two numbers..

function getLCM(num1, num2) {

    let i = 2 ;
    let lcm = 1;
    while( num1 > 1 || num2 > 1){

        if( num1 % i == 0 || num2 % i == 0){

           if( num1 % i == 0 ) num1 = parseInt(num1 / i)  ;
           if( num2 % i == 0 ) num2 = parseInt(num2 / i) ;
            lcm = lcm * i ;
        }
        else i++ ;
}
return lcm
}
console.log(getLCM(24, 20));
