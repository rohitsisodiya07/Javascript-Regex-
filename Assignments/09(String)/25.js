// 25. Repeat each character twice

    let str = "abc" ;
    let result = [...str].map( res => res.repeat(2)).join("") ;
    console.log(result);
    