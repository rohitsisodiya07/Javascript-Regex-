// Check Anagram

    let str1 = "listen" ;
    let str2 = "silent" ;

    let res1 = str1.split("").sort().join("") ;
    let res2 = str2.split("").sort().join("") ;

    if( res1===res2 ) console.log("Anagram") ;
    else console.log("Not Anagram");
    