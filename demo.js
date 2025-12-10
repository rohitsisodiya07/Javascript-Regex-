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

//Datatypes
//Use of BackTicks[` `]
// let name = "Rohit Sisodiya"
// console.log(`My Name is ${name}`);

// let a = Number(15n)
// let b = 10 
// console.log(a+b);

// let first = "Rohit"
// let last = "Sisodiya"
// console.log(first +" "+ last);

// let aa = 5 ;
// let bb = "6" ;
// console.log(typeof(aa/bb));



// let a = 5
// let b = 6
// let c = "15"
// console.log(a+b+c);
// console.log(c+a+b);
// console.log(c+b+a);

                                        //Operators
//Arithmetic Operator
// let a = 10 ; 
// let b = 4 ;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a**b);
// console.log(a/b);
// console.log(a%b);

//Comparision Operator
// let assi = 15 ; 
// let check = 16 ;
// console.log(assi==check);
// console.log(assi>check);
// console.log(assi<check);
// console.log(assi>=check);
// console.log(assi<=check);
// console.log(assi===check);

//Assignment Operator
// let a = 10 ;
// console.log(a);
// a += 10; //a = a + 10 
// console.log(a);
// a -= 10; //a = a - 10 
// console.log(a);
// a *= 10; //a = a * 10 
// console.log(a);
// a /= 10; //a = a / 10 
// console.log(a);
// a %= 10; //a = a % 10 
// console.log(a);

//Logical Operator
// let a = 15 ;
// let b = 10 ; 
// console.log((a > b && a == b));
// console.log((a > b  || a == b));
// console.log(!(a>b));


//Increment and Decrement Operator
// let a = 15 ;
// a++ ;
// console.log(a);
// a--;
// console.log(a);
// let b = "Rohit" ;
// console.log(typeof(b));
// console.log(typeof(Number(b)));

//Ternary Operator
// let age = 19 ;
//  console.log( (age > 18) ? "Eligible" : "Not Eligible");
  

//Conditional Statement
//1. if
    // let age = 18 ;
    // if( age >= 18) console.log("Congratulation!! You are Eligible");
    
//2. if-else
    // let age = 17 ;
    // if( age >= 18) console.log("You are Eligible for Vote");
    // else  console.log("Sorry!!! You are Not Eligible for Vote");
    
//3. if-else-if
    // let number = 12 ;
    // if( number > 0) console.log("Number is Positive");
    // else if( number < 0) console.log("Number is Negative");
    // else console.log("Number is Zero");
// let id = 101 ;
// let password = 7274 ;
// if( id == 101){
//         if( password == 7274) console.log("Congratulation You are Successfully Login");
//         else console.log("Password is Incorrect");       
// }
// else if( password == 7274) console.log("Invalid Id But Password is Correct");
// else console.log("Both Id and Password is Incorrect");

//Switch

// let marks = 80 ;

// switch(true){
//     case (marks >= 90) : console.log("Grade A");
//         break ;
//     case (marks >= 80) : console.log("Grade B");
//         break ;
//     case (marks >= 70) : console.log("Grade C");
//         break ;
//     case (marks >= 60) : console.log("Grade D");
//         break ;
//     case (marks >= 50) : console.log("Grade E");
//         break ;
//     default :
//             console.log("Fail");       
// }

//Ternary Operator

// let marks = 101 ;

//     (marks >=90 && marks<=100)  ? console.log("Grade A") : 

//         (marks >=80 && marks<90) ? console.log("Grade B") :

//            (marks >=70 && marks <80) ?console.log("Grade C") : 

//                 (marks >=60 && marks<70) ?console.log("Grade D") : 
               
//                      (marks >=0 && marks<60) ?console.log("Fail") : 

//                         console.log("Enter Valid Input ");
                        

// Loops
//For Loop
//for(initialization, condition, increment/decrement)

// for (let i = 0; i < 100; i++) {

//    if( (i >= 21 && i <= 30) || (i >= 71 && i <= 80) )   continue ;

//    else console.log(i);     
// }

//While
// let i = 1 ;
// while( i <= 10){

//     if( i % 2 == 0 ) console.log(i);
//     i++ ;   
// }

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

//String -Methods
let name = "Rohit Sisodiya";
let surname = "Sisodiya"
// console.log(name);

// console.log(name.length);
// console.log(name.charAt(2));
// console.log(name.at(4));
 
// console.log(name.concat(surname));
// console.log(name.trim());
// console.log(name.trimStart());
// console.log(name.trimEnd());
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// console.log(name.slice(1,3)); // Not Include Last Character
// console.log(name.substring(1,3)); // Not Include Last Character
// console.log(name.substr(1, 3)); // Include Last Character // Not as Much used

// console.log(name.replace("Sisodiya", "Sharma") )
// console.log(name.replaceAll("o", "a") )

let check = "rohit"
// console.log(check.split(""));


// for( let i = check.length-1 ; i >= 0 ; i--){
//     if( i == 0){
//         console.log(check[i].toUpperCase());    
//     }
//     else console.log(check[i]);  
// }

// let capital = check.charAt(0).toUpperCase() + check.slice(1) ;
// console.log(capital);


 //Numbers
    // let num = 1010 ;
    // let str = num.toString()
    // console.log(str);
    // console.log(typeof(str));
    
    // to fixed
        // let money = 152.6525554562 ;
        // let dec = 142
        // console.log(money.toFixed(3));
        // console.log(dec.toFixed(2));

    //parseInt
        // let float = 45.115 ;
        // console.log(parseInt(float)); // Make Whole Number
    //parseFloat
        let num = 51 ;
        console.log(parseFloat(num));
        
           
        
        