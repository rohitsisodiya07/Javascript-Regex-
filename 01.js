// Remove duplicate values from an array using array methods.


    // let arr = [10, 20, 30, 40, 20, 30, 10] ;

    // let sets = [... new Set(arr)] ;
    // console.log(sets);
    

// Find the maximum number in an array without using Math.max().


    // let arr = [10, 20, 45, 40, 20, 30, 10] ;

    // let largest = arr.reduce( (acc, curr) =>{

    //         if(curr > acc) return curr ;
    //         else return acc ;
    // }, -Infinity)

    // console.log(largest);


//
    // let arr = ["rohit", "mohit", "sohan"] ;
    // let convert = arr.join(" ").toUpperCase().split(" ") ;
    // console.log(convert);
    
//

    // let arr = [10, 20, 10, 30, 20, 50, 40, 50, 10, 20] ;
    // let obj = {} ;

    // for(let val of arr){

    //     if(obj[val]){

    //             obj[val]++ ;
    //     }
    //     else{
    //         obj[val] = 1 ;
    //     }
    // }
    // for( let key in obj){

    //     console.log(key, "->", obj[key]); 
    // }

//
    // let arr = [10, 20, 30, 40, -1, 50] ;
    // let res = arr.some( result => result < 0) ;
    // console.log(res);
    
//
    // let arr = [10, 20, 30, "Rohit", 10] ;
    // let res = arr.every( num => typeof num === "number" )
    // console.log(res);
    
//
    // let arr = [20, 40, 40, 60, 44, 30, 80] ;

    // let res = arr.find( num => num > 50) ;
    // console.log(res);
    
//
    // let arr = [10, [20, [30, [40]]]] ;
    // let res = arr.flat(Infinity)
    // console.log(res);

// //
//     let arr = [20, 40, 60, 80, 100] ;
//     let rev = arr.toReversed() ;
//     console.log(rev);
    

//
    // let arr = [1, 2, 4, 5, 2, 2, 7, 2, 6, 3] ;
    // console.log(arr.lastIndexOf(2));
    
//***************************************************************** */

    // let arr = [1, 2, 3, 4, 5, 6] ;
    // let res = arr.filter( res => res % 2 == 0) ;
    // console.log(res);
    
    //
    // let arr = [1, 2, 3, 4, 5, 6] ;
    // let newArr = arr.map( res => res*3) ;
    // console.log(newArr);
    
    //
    // let arr = [1, 2, 3, 4, 5, 6] ;
    // let sum = arr.reduce( (acc, curr) => {

    //             return acc+curr ;
    // }, 0) 
    // console.log(sum);
    
    //
        // let arr = [1, 2, true, 0, "", null, undefined, 3] ;
        // let res = arr.filter(Boolean) ;
        // console.log(res);
        
    //
        // let arr = [1, 3, 2, 6, 9, 8, 7] ;
        // let newArr = arr.sort( (a, b) => a-b) ;
        // console.log(newArr);
        

    //    
    // let arr = [
    //     { name : "Rohit", age : 22},
    //     { name : "Mohan", age : 26},
    //     { naem : "Sohan", age : 24}
    // ]
    // arr.sort( (a, b) => a.age - b.age) ;
    // console.log(arr);
    

    //
        // let arr = [10, 20, 10, 30, 20, 40] ;
        // let result = arr.filter( (val, index, arr) => {return arr.indexOf(val) === index})
        // console.log(result);
        
    //
        // let arr = ["Rohit", "Rohit Sisodiya", "Mohan Seth", "Mohit Awq"] ;

        // let largest = arr.reduce( (acc, curr) => {

        //         if( curr.length > acc.length) return curr ;
        //         else return acc ;
        // }, "")
        // console.log(largest);
        
    //        
    // let arr = [
    //     { id : 1, name : "Rohit", age : 22},
    //     { id : 2, course : "MERN", address : "jaipur"}
    // ]
    // let obj = arr.reduce( (acc, curr) => {

    //         acc[curr.id] = curr ;
    //         return acc ;

    // }, {})
    // console.log(obj);
    

    //
        // let arr = [10, 20, 25, 30, 44, 80, 90, 90, 74] ;
        // let sets = [... new Set(arr)] ;
        // let second = sets.sort( (a, b) => b-a)[1] ;
        // console.log(second);
        
    //
        // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        // let size = 3 ;
        // let newArr = [] ;
        // for( let i = 0 ; i < arr.length ; i+=size){

        //         newArr.push(arr.slice(i, i+size)) ;
        // }
        // console.log(newArr);
        
    //
        // let arr = [10, 20, 30, 40, 50] ;
        // let newArr = arr.toSpliced(1, 1) ;
        // console.log(newArr);
        
    //
        // let arr = [10, 20, 30] ;
        // let arr2 = [20, 40, 50] ;
        // let newArr = [] ;
        // arr.forEach( (val) => {

        //         if(arr2.includes(val)){
        //             newArr.push(val) ;
        //         }
        // })
        // console.log(newArr);
        
        
        //
        
        // let arr = [10, 20, 30] ;
        // let arr2 = [20, 40, 50] ;
        // let newArr = [] ;

        // arr.forEach( (val) => {

        //         if(!(arr2.includes(val))){
        //             newArr.push(val) ;
        //         }
        // })
        // arr2.forEach( (val) => {

        //         if(!(arr.includes(val))){
        //             newArr.push(val) ;
        //         }
        // })
        // console.log(newArr);
        
        
        //
        // let arr = [10, [20, [30, [40]]]] ;
        // let newArr = arr.flat(Infinity)
        // console.log(newArr);

        //
            // let arr = [
            //     { name : "Rohit", price : 20000},
            //     { name : "Mohit", price : 10000},
            //     { name : "Sohan", price : 5000},
            //     { name : "Mohan", price : 2000},
            // ]

            // let totalPrice = arr.reduce( (acc, curr) => {
            //         return acc + curr.price ;
            // }, 0)
            // console.log(totalPrice);
            
        // //
        //     let arr = [1, 2, 3, 4, 5, 6] ;

        //     let obj = arr.reduce( (acc, curr, index) => {

        //             acc[index] = curr ;
        //             return acc ;
        //     }, {})
        //     console.log(obj);
            

        // 
            // let arr = [10, 20, 10, 30, 20, 40, 10, 20, 50] ;
            // let map = {} ;
            // let duplicate = [] ;

            // for( let val of arr){

            //         if(map[val]){
            //             map[val]++;
            //         }
            //         else {
            //             map[val] = 1 ;
            //         }
            // }

            // for( let key in map){

            //     if(map[key] > 1){
            //         duplicate.push(key)
            //     }
            // }
            // console.log(duplicate);
            
//
// console.log(typeof NaN);
// console.log(isNaN("abc"));

// let n1 = 5.6789;
// console.log(n1.toFixed(2));

//***************************************************************************************************** */
// Object
    //
        // let obj = { name : "Rohit"}
        // let obj2 = { age : 22} 
        // // let obj3 = Object.assign(obj, obj2) ;
        // let obj3 = {...obj, ...obj2}
        // obj3.name = "Mohan"
        // console.log(obj3);
        // console.log(obj)
        
    //
        // let obj = {
        //     name  : "Rohit",
        //     address : {
        //         state : "Rajasthan",
        //         city : "Jaipur"
        //     }
        // }
        // let obj3 = structuredClone(obj) ;
        // obj3.address.city = "Ajmer" ;
        // console.log(obj);
        
    //
        // let obj = { name : "Rohit", address : "jaipur"} ;
        // if( Object.keys(obj).length == 0) console.log("Empty");
        // else console.log("Not Empty");
        
        
    //
        // Object.freeze(obj) 
        // obj.age = 22 ;
        // console.log(obj)
        // console.log(Object.isFrozen());
        
    //
        // Object.seal(obj) ;
        // obj.name = "Mohan" ;
        // obj.age = 22 ;
        // console.log(obj);
        // console.log(Object.isSealed());
        
    //
        // Object.preventExtensions(obj)
        // obj.name = "Mohan" ;
        // obj.age = 22;
        // delete obj.address ;
        // console.log(obj);
        // console.log(Object.isExtensible(obj));
        
    //
        // let obj = { name : "Rohit", age : 22} ;
        // let ans = Object.entries(obj).map( ([key, val]) => `${key}=${val}`).join("&")
        // console.log(ans);
        
    //
    // let obj = {
    //     name : "Rohit",
    //     age : null,
    //     data : undefined,
    //     course : "MERN"
    // }
    // for( let key in obj){

    //     if(obj[key] == null || obj[key] == undefined){
    //         delete obj[key];
    //     }
    // }
    // console.log(obj);
    
    // let obj = {
    //       1 : 2,
    //       2 : 4,
    //       3 : 6,
    //       4 : 8,
    // }
    // let res = Object.entries(obj).map( ([Key, val]) => [Key, val*2])
    // let result = Object.fromEntries(res)
    // console.log(result);
    

    
const db = {

  users: [
    {
      userId: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "customer",
      address: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        pincode: 110001
      },
      cart: [
        { productId: 1, quantity: 1 },
        { productId: 4, quantity: 2 }
      ],
      wishlist: [2, 3],
      orders: ["ORD1001", "ORD1002"]
    },

    {
      userId: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "customer",
      address: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: 400001
      },
      cart: [
        { productId: 2, quantity: 1 }
      ],
      wishlist: [1],
      orders: ["ORD1003"]
    }
  ],

  categories: [
    {
      categoryId: 1,
      name: "Electronics",
      parentCategory: null
    },
    {
      categoryId: 2,
      name: "Accessories",
      parentCategory: 1
    },
    {
      categoryId: 3,
      name: "Furniture",
      parentCategory: null
    }
  ],

  vendors: [
    {
      vendorId: 1,
      name: "TechWorld",
      rating: 4.5,
      location: "Bangalore"
    },
    {
      vendorId: 2,
      name: "HomeStore",
      rating: 4.2,
      location: "Jaipur"
    }
  ],

  products: [
    {
      productId: 1,
      name: "Laptop",
      price: 65000,
      brand: "Dell",
      categoryId: 1,
      vendorId: 1,
      stock: 10,
      specifications: {
        ram: "16GB",
        storage: "512GB SSD",
        processor: "Intel i7"
      },
      rating: 4.6
    },

    {
      productId: 2,
      name: "Smartphone",
      price: 30000,
      brand: "Samsung",
      categoryId: 1,
      vendorId: 1,
      stock: 20,
      specifications: {
        ram: "8GB",
        storage: "128GB",
        battery: "5000mAh"
      },
      rating: 4.4
    },

    {
      productId: 3,
      name: "Headphones",
      price: 5000,
      brand: "Sony",
      categoryId: 2,
      vendorId: 1,
      stock: 15,
      specifications: {
        type: "Wireless",
        noiseCancellation: true
      },
      rating: 4.5
    },

    {
      productId: 4,
      name: "Office Chair",
      price: 12000,
      brand: "GreenSoul",
      categoryId: 3,
      vendorId: 2,
      stock: 8,
      specifications: {
        material: "Mesh",
        adjustableHeight: true
      },
      rating: 4.2
    }
  ],

  orders: [
    {
      orderId: "ORD1001",
      userId: 1,
      orderDate: "2026-03-01",
      items: [
        { productId: 1, quantity: 1 },
        { productId: 3, quantity: 2 }
      ],
      payment: {
        method: "UPI",
        status: "Paid"
      },
      delivery: {
        status: "Delivered",
        date: "2026-03-05"
      },
      coupon: "DISC10"
    },

    {
      orderId: "ORD1002",
      userId: 1,
      orderDate: "2026-03-07",
      items: [
        { productId: 4, quantity: 1 }
      ],
      payment: {
        method: "Credit Card",
        status: "Paid"
      },
      delivery: {
        status: "Shipped",
        expected: "2026-03-12"
      }
    },

    {
      orderId: "ORD1003",
      userId: 2,
      orderDate: "2026-03-08",
      items: [
        { productId: 2, quantity: 1 }
      ],
      payment: {
        method: "COD",
        status: "Pending"
      },
      delivery: {
        status: "Processing"
      }
    }
  ],

  reviews: [
    {
      reviewId: 1,
      userId: 1,
      productId: 1,
      rating: 5,
      comment: "Excellent laptop",
      date: "2026-03-06"
    },
    {
      reviewId: 2,
      userId: 2,
      productId: 2,
      rating: 4,
      comment: "Good phone",
      date: "2026-03-09"
    }
  ],

  coupons: [
    {
      code: "DISC10",
      discount: 10,
      type: "percentage",
      expiry: "2026-12-31"
    }
  ],

  inventory: [
    {
      productId: 1,
      warehouse: "Delhi",
      stock: 10
    },
    {
      productId: 2,
      warehouse: "Mumbai",
      stock: 20
    },
    {
      productId: 3,
      warehouse: "Bangalore",
      stock: 15
    },
    {
      productId: 4,
      warehouse: "Jaipur",
      stock: 8
    }
  ]

};
    
    
// let result = db.products.filter( res => (res.price > 10000)) ;
// // console.log(result);

// let ans = result.map( (val) => {
    //     return val.name ;
    // })
    // console.log(ans.join( ","));
    
    
// let result = db.categories.find(  (res) => ( res.name === "Electronics"))
// console.log(result);
// let ans = db.products.filter( (res) => res.categoryId === result.categoryId)
// console.log(ans);
// let res = ans.map( (val) => val.name) ;
// console.log(res.join(","));



// let result = db.users.map( res => res.address.city) ;
// console.log(result);

// let result = db.users[0].cart.map( a => {
//   return db.products.filter( b => {
// return a.productId === b.productId))
//   } 
// }) ;



// result= db.users[0].cart.map((val)=>{
//   return db.products.filter((val2)=>val.productId === val2.productId)
// })
// let totalSum = result.flat().reduce( (acc, curr) =>{

//     return acc+curr.price ;
// }, 0) ;
// console.log(result);
// console.log(totalSum);



// let ans = db.products.filter( res => result.includes(res.productId))
// // console.log(result);
// console.log(ans);


let result = db.users.map( res => res.email).map( res => {

    let ans = "" ;
    ans += res[0] ;
    let index = res.indexOf("@") ;
    for( let i = 1; i < index ; i++){

        ans += "*" ;
    }
    ans += res.slice(index) ;
    return ans ;
});
console.log(result);



