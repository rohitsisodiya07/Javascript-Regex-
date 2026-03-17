// 14. Replace all vowels with *

    let str = "Rohit Sisodiya" ;
    let ans = "" ;
    let vowels = "aeiouAEIOU" ;
    for( let i = 0 ; i < str.length ; i++){

            if(vowels.includes(str[i])) ans += "*" ;
            else ans += str[i] ;
    }
    console.log(ans);
    