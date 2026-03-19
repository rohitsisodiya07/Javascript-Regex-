// 46. Find object with max property

    let arr = [{name:'A',score:80},{name:'B',score:95},{name:'C',score:70}] ;

    arr.sort( (a, b) => b.score - a.score) ;

    console.log(arr[0]);
    