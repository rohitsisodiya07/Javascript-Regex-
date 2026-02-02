//3. Given a string, check whether it is a palindrome or not.

    let str = "madam" ;
    let rev = str.split("").reverse().join("")
    
    if( str === rev ){
        console.log("Pallindrome");
    }
    else{
        console.log(("Not Pallindrome"));
    }
    
    