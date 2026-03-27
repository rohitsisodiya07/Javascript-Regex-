//1. Find intersection of two arrays

    // let arr1 = [1, 5, 7, 9, 10] ;
    // let arr2 = [2, 3, 5, 9, 11] ;

    // let res = arr1.filter( (res) => arr2.includes(res))
    // console.log(res);
    
//2. Remove duplicates from array
    // let arr = [10, 20, 30, 10, 20, 40, 50, 30] ;
    // let newArr = [...new Set(arr)];
    // console.log(newArr);
    
//3. Move all zeros to end
    // let arr = [10, 0, 5, 2, 0, 4, 0, 6] ;
    // let newArr = arr.filter( (res) => res !== 0)
    // let newArr1 = arr.filter( (res) => res === 0)

    // let result = [...newArr, ...newArr1]
    // console.log(result);
    
//4.Find missing number in array
    // let arr = [1, 2, 3, 5, 6] ;

    // let n = arr.length+1;
    // let sum = n * (n+1)/2 ;

    // let getSum = arr.reduce( (acc, curr) => { return acc+curr}, 0)

    // console.log(sum-getSum);
    
//5.Find frequency of elements
    // let arr = [10, 20, 30, 40, 50, 50, 30, 20, 10, 10] ;
    // let result = arr.reduce( (acc, curr) =>{ 

    //         if(!acc[curr]){
    //             acc[curr] = 1 ;
    //         }
    //         else acc[curr]++;
    //         return acc ;
    // }, {})
    // console.log(result);
    
//6. Flatten nested array
    // let arr = [10, [20, 30, [40]]] ;

    // let flat = arr.flat(Infinity) ;
    // console.log(flat);
    