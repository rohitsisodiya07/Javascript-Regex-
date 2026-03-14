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
            
        //
            // let arr = [1, 2, 3, 4, 5, 6] ;

            // let obj = arr.reduce( (acc, curr, index) => {

            //         acc[index] = curr ;
            //         return acc ;
            // }, {})
            // console.log(obj);
            

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

let n1 = 5.6789;
console.log(n1.toFixed(2));
