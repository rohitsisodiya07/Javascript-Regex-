//Timely Function

//Set TimeOut

// let a = true ;
// let b = setTimeout(() => console.log("Rohit"), 10000) ; //[ 1000ms = 1sec]

// if(a){
//     clearTimeout(b) ;
// }

//setInterval

// setInterval( ()=> console.log("Rohit"), 1000);

// let a = 11;
// let b = setInterval(() => {
//   a--;
//   console.log(a);
//   if (a <= 0) {
//     console.log("Congratulation!!!!");

//     clearInterval(b);
//   }
// }, 1000);

//CALL BACK FUNCTION

function abc(mno) {
  console.log("Hello");
  mno();
}
function mno() {
  console.log("World");
}
abc(mno);
 