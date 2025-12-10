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

let marks = 101 ;

    (marks >=90 && marks<=100)  ? console.log("Grade A") : 

        (marks >=80 && marks<90) ? console.log("Grade B") :

           (marks >=70 && marks <80) ?console.log("Grade C") : 

                (marks >=60 && marks<70) ?console.log("Grade D") : 
               
                     (marks >=0 && marks<60) ?console.log("Fail") : 

                        console.log("Enter Valid Input ");