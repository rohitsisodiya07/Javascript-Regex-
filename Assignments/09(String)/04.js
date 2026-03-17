// 4. Count consonants in a string

     let str = "Rohit Sisodiya" ;
    let vowels = "aeiouAEIOU" ;
    let count = 0 ;

    for( let i = 0 ; i < str.length ; i++){

            if(!vowels.includes(str[i])) count++;
    }
    console.log(count);