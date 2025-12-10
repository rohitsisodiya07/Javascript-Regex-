// 33. Check if a string is palindrome.

    let name = "ror" ;
    let word = "" ;
    for(let i = name.length-1 ; i >= 0 ; i--){
           
        word = word + name[i] ;
    }
    if( name == word ) console.log("Pallindrome");
    else console.log("Not Pallindrome");
    
    
    