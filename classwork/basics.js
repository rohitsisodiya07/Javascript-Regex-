// let a = 10 ;
// if( a >= 10){

//     // alert(" Number is Greater than or Equal to 10") ;
// }
// console.log("Hello Boss!!!!");

// var b = 10 ;
// var b = 11 ;
// console.log(b);

// let b = 10 ;
// let b = 11 ; // Error Occupr Not to re-Assign Variable 
// console.log(b);

// const c = "Hello" ;
// const c = "Hello" ; // Error Occupr Not to re-Assign Variable 
// console.log(c);

// Hositing : to access any variable value if declared with var keyword before its initialization.
// console.log(a);// you have used it or accessed it before its declaration //undefined
// var a = 1 ;//Declaration
// console.log(a) ; // access//1

console.log(a);// you have used it or accessed it before its declaration //Reference Error
var a = 1 ;//Declaration
console.log(a) ; // access//1

//Variable Hoisting

//Function Hoisting : Only Possible in named function(normal function, regular function)
abc();
function abc(){
    console.log("hoisted fun", a);    
}
//Expressional Function : Function ka reference ek expression main stored kiya gaya hai. Expression ko call karne se function invoke ho jayega.
ghi() ; // Function hoisting with expressional function
// type error?
//ghi wo ek expression ko represent karte hai jo baad mai jake ek function ko refer kar rhe h
//aapne ek expresssion ko call krdiya h.
//Expression is not a function.
// console.log(ghi);
// var ghi = function(){} ;
// ghi() ;
// let ab = function(){} ; // agar hum pehele use krte h to reference error aayega.
// const aa = function(){} ;

//Agar kisi expressional function ko var se bnaya gaya hai aur usko pehele call krliya gya.


//