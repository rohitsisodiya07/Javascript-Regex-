// 16. Check if two strings are anagrams.

    let str1 = "listen" ;
    let str2 = "silent" ;

    let ans1 = str1.split("").sort().join("") ;
    // console.log(ans1);
    let ans2 = str2.split("").sort().join("") ;
    // console.log(ans2);

    if(ans1===ans2) console.log("Anagram");
    else console.log("Not Anagram");
    
    
    