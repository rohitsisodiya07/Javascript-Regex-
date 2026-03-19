// 44. Sort array of objects by property.

    let arr = [{name:'A', age:25},{name:'B', age:20},{name:'C', age:30}] ;

    arr.sort( (a, b) => a.age - b.age) ;

    console.log(arr);
    