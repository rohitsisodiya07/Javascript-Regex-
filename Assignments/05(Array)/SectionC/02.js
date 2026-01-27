// 22. What is the difference between includes() and indexOf()?
// Both methods are used to check whether a value exists in an array or string

//includes[check presence of value and return true or false]

    let arr = [2, 4, 6, 8] ;
    console.log(arr.includes(8)); // True
    console.log(arr.includes(10)); // False
    
//indexof[find position of element and return the index of element. if not present return -1]

    let num = [100, 200, 300, 400] ;
    console.log(num.indexOf(300)); // return index
    console.log(num.indexOf(500)); // return -1
    