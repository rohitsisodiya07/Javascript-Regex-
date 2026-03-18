// 33. Get substring between two characters

    let str = "hello[world]javascript" ;
    let start = str.indexOf('[') ;
    let end = str.indexOf(']') ;

    let result = str.slice( start+1, end) ;
    console.log(result);
    