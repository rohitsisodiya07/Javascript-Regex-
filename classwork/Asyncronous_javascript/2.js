// Promise

// https://api.github.com/users

console.log("Started....");

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

console.log("Ended!!");


//For Display Image of Users on Browser.
fetch("https://api.github.com/users")
  .then((res) => {

    if(!res.ok){
        throw new Error ("Data Not Present in Server")
    }
    return res.json();

  })
  .then((data) => {

    const parent = document.getElementById("first") ;

    for( let i = 0 ; i < data.length ; i++){
    const image = document.createElement('img') ;
    image.src = data[i].avatar_url ;
    image.style.height = "200px" ;
    image.style.width = "200px" ;

    parent.append(image) ;
    }

  })
  .catch( (err) => {

        const parent = document.getElementById("first") ;
        parent.textContent = err
  })
