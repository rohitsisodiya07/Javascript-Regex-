// 2 Given an array and two indexes, swap the elements at those indexes.

    let arr = [ 10, 20, 30, 40 ]
    let index1 = 1;
    let index2 = 2 ;

    [arr[index1], arr[index2]] = [arr[index2], arr[index1]] 

    console.log(arr);   
    
    