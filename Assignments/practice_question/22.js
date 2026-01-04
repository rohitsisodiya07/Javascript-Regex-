// Write a function to capitalize the first letter of each word in a string.

function capitalWord(str){

  let res = "" ;
  for( let i = 0 ; i < str.length ; i++){

     if( i == 0 ) res += str[i].toUpperCase() ;
     else res += str[i] ;
  }
  return res ;
}

function getWord(str){

    word = "" ;
    res = "" ;
    for( let i = 0 ; i < str.length ; i++){

      if( str[i] == ' '){
        res += capitalWord(word) ; 
        res += " " ;   
        word = "" ;
      }
      else word += str[i] ;
    }
    res += capitalWord(word) ;
    console.log(res);
    
}
getWord("i am working as mentor") ;