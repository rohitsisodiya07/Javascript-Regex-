// 54. Sort objects by multiple keys

    let arr = [{name:'A',age:25},{name:'B',age:20},{name:'A',age:22}] ;

    let obj = arr.sort( (a, b) => a.age - b.age)

    console.log(obj);
    