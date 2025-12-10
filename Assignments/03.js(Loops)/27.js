// 31. Count total words in a sentence.
    let word = "My Name is Rohit Sisodiya" ;
    let count = 1 ;
    for(let i = 0 ; i < word.length ; i++){

        if(word[i] == " ") count++ ;
    }
    console.log(count);
    