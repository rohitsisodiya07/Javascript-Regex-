// Promise

// https://api.github.com/users

// console.log("Started....");

// let p1 = fetch("https://api.github.com/users");

// // console.log(p1); // Pending
// const p2 = p1.then((res) => {
//   // console.log(res); //BitFormat
//   return res.json(); //Convert to JS Object.
// });

// p2.then((response) => {
//   console.log(response);
// });

//
//Promise Chaining
// fetch("https://api.github.com/users")
//   .then((res) => {
//     return res.json();
//   })

//   .then((data) => {
//     console.log(data);
//   });

// console.log("Ended!!");

//For Display Image of Users on Browser.
// fetch("https://api.github.com/users")
//   .then((res) => {

//     if(!res.ok){
//         throw new Error ("Data Not Present in Server")
//     }
//     return res.json();

//   })
//   .then((data) => {

//     const parent = document.getElementById("first") ;

//     for( let i = 0 ; i < data.length ; i++){
//     const image = document.createElement('img') ;
//     image.src = data[i].avatar_url ;
//     image.style.height = "200px" ;
//     image.style.width = "200px" ;

//     parent.append(image) ;
//     }

//   })
//   .catch( (err) => {

//         const parent = document.getElementById("first") ;
//         parent.textContent = err
//   })

//Promise

// new Promise( function( resolve, reject) {

//       let result = true ;

//       if(result){
//           resolve( { name : "Rohit Sisodiya", age : 22}) ;
//       }
//       else {
//         reject("ERROR!!! Something Went Wrong") ;

//       }
// }).then( res => console.log(res))
//   .catch( err => console.log(err))

//********************************************************** */
// new Promise( function( resolve, reject){

//       setTimeout( function(){
//             console.log("Async Task ")
//             resolve( {name : "Rohit Sisodiya", age : 22} )
//       }, 1000)
// })
//   .then( data => console.log(data))

//**************************************************************** */

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let result = false;
//     if (result) {
//       console.log("Async Task");
//       resolve({ username: "Rohit Sisodiya", userAge: 22 });
//     } else {
//       reject("ERROR OCCUR!!!");
//     }
//   }, 1000);
// })
// .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
// .catch((err) => console.log(err)).finally(() => console.log("Promise is Either Resolve or Reject"));

//******************************************************************************** */
//Async Await

//  let promiseThree = new Promise ( (resolve, reject) => {

//     setTimeout( () => {

//         let result = false ;

//         if( result ){
//           resolve( { name : "Rohit Sisodiya", age : 22} ) ;
//         }
//         else{
//           reject("Error AA GYI LADLE!!!") ;
//         }       
//     }, 1000)
// })

// async function consumePromise(){

//      try {
      
//         const response = await promiseThree ;
//         console.log(response);
        
//      } catch (error) {
//         console.log(error);
        
//      }
// }
// consumePromise() ;

// Fetch API (Using Async Await)

  // async function fetchApi(){

  //     try {
        
  //         const response = await fetch("https://api.github.com/users");
  //         const result = await response.json() ;
  //         console.log(result);
          
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  // fetchApi() ;

  //Using Then Catch.

    fetch("https://api.github.com/users")
    .then( (response) => {

          return response.json() ;
    })
    .then( (data) => {

        console.log(data) ;
    })
    .catch( (err) => {

        console.log(err) ;
    })