// Reverse words in a sentence.


function reverseword(str) {
  res = "";
  for (let i = str.length-1; i >= 0; i--) {

    res += str[i] ;
  }
  return res;
}

function convertTitle(str) {
  word = "";
  res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      res += reverseword(word);
      res += " ";
      word = "";
    } else word += str[i];
  }
  res += reverseword(word);
  console.log(res);
}
convertTitle("I am Rohit");