// 17. Check whether a number is palindrome.
     let num = 2552, rev = 0;
     let temp = num ;
    while(num){
        let last = num % 10 ;
        rev = rev * 10 + last ;
        num = Math.floor(num/10) ;
    }
    if(temp == rev) console.log("Pallindrome");
    else console.log("Not Pallindrome");
    