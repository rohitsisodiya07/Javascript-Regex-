// Write a function to count how many times a character appears in a string.

// function countCharacter(str, ch) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (ch == str[i]) count++;
//   }
//   console.log("Count = ", count);
// }

// countCharacter("heyy i am rohit", "t");


//How Many Times a Character Apper Using Object.


function countAll(str){

    let count = {} ;
    for( let i = 0 ; i < str.length ; i++){
        let ch = str[i] ;

        if(count[ch]) count[ch]++ ;
        else count[ch] = 1 ;
    }
    console.log(count);
}
countAll("Rohit Sisodiya") ;