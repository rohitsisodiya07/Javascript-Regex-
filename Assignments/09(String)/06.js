// 6. Convert first letter of each word to uppercase

    let str = "javascript is powerful" ;
    let upper = str.split(" ")
                    .map( word => word.charAt(0).toUpperCase()+ word.slice(1)).join(" ") ;
    console.log(upper);
    


