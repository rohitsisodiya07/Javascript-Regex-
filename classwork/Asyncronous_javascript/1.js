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

//promise.allsettled.

// const p1 = Promise.resolve(1) ;
// const p2 = Promise.reject(2) ;

// Promise.allSettled([p1, p2])
//   .then( res => console.log(res))
//     .catch( err => console.log(err))

//promise.any
// const p1 = Promise.reject(1)
// const p2 = Promise.resolve(2)

//    Promise.allSettled([p1, p2])
//   .then( res => console.log(res))
//     .catch( err => console.log(err))

//promise.race

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Step-1");
//   }, 2000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Step-2");
//   }, 1000);
// });

// Promise.race([p1, p2])
//   .then( res => console.log(res))
//     .catch( err => console.log(err))


//then

  // Promise.resolve(10)
  //   .then( res => console.log("res ", res), err => console.log("err ", err) )

//Promise Chain

  // Promise.resolve(10)
  //   .then( res => res*5)
  //     .then( data => data + 5)
  //       .then( a => console.log(a))


//ASYNC - AWAIT

  // Function Declaration 

  // function getuser(){

  //     setTimeout(()=> console.log("Hello"), 1000) ;
  // }
  // async function abc(){
  //   let a = await getuser() ;
  // }
  // abc()
  

  //Arrow Function
//   function abc(){
//     setTimeout(()=> console.log("Hello"), 1000) ;
//   }

//   let a = async () => {

//       let b = await abc() ;
//   }

//  a() ;
 

// async function abc() {
  
//     try{
//         let a = await Promise.reject(10) ;
//         console.log(a);      
//     } catch (err){
//         console.log("Error Occur : ", err);  
//     }
// }
// abc() ;

//JSON ( Java Script Object Notation )
//  let a = {
//     "id" : 1,
//     "name" : "amit",
//     "role" : "student"
// }
// console.log(a);

//Methods

// let obj = {
//   name : "Rohit",
//   age : 22
// }

// let str = JSON.stringify(obj) ;
// console.log(str);

// let newObj = JSON.parse(str) ;
// console.log(newObj);


//Fetch Method

// async function fetchData() {
  
//       let result = await fetch("https://fake-json-api.mock.beeceptor.com/users", {
//         methods : 'GET'
//       })
//       // console.log(result);
//       let updateResult = await result.json() ;
//       console.log(updateResult);
            
// }
// fetchData() ;

fetch("https://fake-json-api.mock.beeceptor.com/users", {
        methods : 'GET'
}).then( res => res.json())
  .then( result => console.log(result))
  .catch( err => console.log(err))