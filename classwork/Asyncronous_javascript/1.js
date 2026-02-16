//Timely Function

//Set TimeOut

// let a = true ;
// let b = setTimeout(() => console.log("Rohit"), 10000) ; //[ 1000ms = 1sec]

// if(a){
//     clearTimeout(b) ;
// }

//setInterval

// setInterval( ()=> console.log("Rohit"), 1000);

let a = 11;
let b = setInterval(() => {
  a--;
  console.log(a);
  if (a <= 0) {
    console.log("Congratulation!!!!");

    clearInterval(b);
  }
}, 1000);

//CALL BACK FUNCTION ( when we do nested callback its called callback hell).

// function abc(mno) {
//   console.log("Hello");
//   mno();
// }
// function mno() {
//   console.log("World");
// }
// abc(mno);

//Promise
//States [ Pending, FulFilled, Rejected].

// let a = new Promise((resolve, reject) => {
//   let abc = true;
//   if (abc) {
//     resolve("Solved");
//   } else {
//     reject("Rejected");
//   }
// });

// console.log(a);

// a.then((data) => console.log(data))

//   .catch((err) => console.log("Error Occur :", err))

//   .finally(() => console.log("Task Completed"));


// Promise.resolve("Success")
//   .then( res => console.log(res)) ;
  
//   Promise.reject("Failed")
//     .catch( res => console.log(res)) ;
  
  
//Promise.all

  // let p1 = new Promise( (resolve, reject) => {

  //     setTimeout( () => {
  //         resolve("Step-1");    
  //     }, 1000 )
  // })

  // let p2 = new Promise( (resolve, reject) => {

  //     setTimeout( () => {
  //         resolve("Step-2");    
  //     }, 1000 )
  // })
  
  // let p3 = new Promise( (resolve, reject) => {

  //     setTimeout( () => {
  //         reject("Step-3");    
  //     }, 1000 )
  // })

  //   let abc = Promise.all( [p1, p2, p3] ) ;
  //   // console.log(abc);

  //   abc.then( res => { console.log(res) })
  //     .catch( (err) => console.log("Error : ", err) )
  //       .finally( () => console.log("Task Completed")) ;

    