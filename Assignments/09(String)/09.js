// 9. Find the Shortest word in a sentence

    let sentence = "javascript is a powerful programming language" ;
    let arr = sentence.split(" ").reduce( (acc, curr) => {

            if( curr.length >= acc.length) return acc ;
            else return curr ;
    }, ) ;
    console.log(arr);
    