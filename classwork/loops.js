// Loops
//For Loop
// for(initialization, condition, increment/decrement)

for (let i = 0; i < 100; i++) {

   if( (i >= 21 && i <= 30) || (i >= 71 && i <= 80) )   continue ;

   else console.log(i);     
}

//While
let i = 1 ;
while( i <= 10){

    if( i % 2 == 0 ) console.log(i);
    i++ ;   
}

// Do-While
// let i = 1 ;
// do{
//     if( i % 2 != 0 ) console.log(i);
//     i++ ;   
// }while( i <= 10);

// let n = prompt("Enter Your Number = ") ;
// for (n ; n <= 100 ; n++ ){
//     console.log(n);
//     document.writeln("hey Boss ") ;
// }