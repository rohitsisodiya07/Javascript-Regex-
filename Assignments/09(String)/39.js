// 39. Insert character at given position

    let str = "helo" ;
    let ch = 'l' ;
    let pos = 3 ;


    let result = str.slice(0, pos)+ ch + str.slice(pos)
    console.log(result);
    

    //
    // let arr = str.split("") ;
    // arr.splice(pos, 0, ch) ;

    // let result = arr.join("")
    // console.log(result);
    