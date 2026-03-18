// 19. Find the index of first vowel

    let str = "Rohit Sisodiya" ;
    let vowels = "aeiouAEIOU" ;
    for( let i = 0 ; i < str.length ; i++){

            if(vowels.includes(str[i])){

                console.log(i) ;
                return 0 ;      
            }
    }