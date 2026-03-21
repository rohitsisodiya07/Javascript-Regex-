//47. Find object with min property

    let arr = [{name:'A',score:80},{name:'B',score:95},{name:'C',score:70}] ;

    arr.sort( (a, b) => a.score - b.score) ;

    console.log(arr[0]);
    