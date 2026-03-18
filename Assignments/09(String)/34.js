// 34. Reverse only vowels

    let str = "javascript" ;
    let vowels = "aeiouAEIOU" ;
    let arr = str.split("") ;
    let i = 0 ;
    let j = str.length-1 ;
    while( i < j){

        while( i < j && !(vowels.includes(arr[i])) )  i++;
        while( i < j && !(vowels.includes(arr[j])) )  j--;
        
        let temp = arr[i] ;
        arr[i] = arr[j] ;
        arr[j] = temp ;

        i++;
        j--;
    }
    let result = arr.join("")

    console.log(result);
    