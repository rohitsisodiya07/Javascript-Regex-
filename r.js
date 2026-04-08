// let obj = {
//     name : "Rohit",
//     age : 21,
//     city : "Jaipur"
// }

// let var1 = obj.name ;
// console.log(var1);

// let var2 = obj["age"] ;
// console.log(var2);

// obj["age"] = 25 ;

// console.log(obj);
// console.log(var2);

// obj.email = "rohit@gmail.com"

// console.log(obj);

// delete obj.city ;
// console.log(obj);

// for( let key in obj){

//     console.log(`${key} => ${obj[key]}`);
    
// }


// console.log(obj.hasOwnProperty("city"));

// console.log("Length of Object = ", Object.keys(obj).length);


// let user = {
//     name : "Rohit",
//     age : 22,
//     address  : {
//         city : "Jaipur",
//         state : "Rajasthan"
//     }
// }
// console.log(user["address"]["city"]);


// let obj = { name  : "Rohit"};
// let obj2 = { age : 21} ;

// // obj = {...obj, ...obj2} ;
// obj = Object.assign({}, obj, obj2)
// console.log(obj);

let arr = [
    { name : "Rohit"},
    { age : 21},
    { stream : "MERN",}
]
let obj = { data : "MERN Data"};

arr.push(obj);
console.log(arr);
