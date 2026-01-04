//21. Write a function to find the longest word in a string.

function convertTitle(str) {
  word = "";
  maxWord = "";
  max = 0;
  let length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      length = word.length;
      if (length > max) {
        max = length;
        maxWord = word;
      }
      word = "";
    } else word += str[i];
  }
  length = word.length;
  if (length > max) {
    max = length;
    maxWord = word;
  }
  console.log(max);
  console.log(maxWord);
}
convertTitle("hey i am Rohit Sisodiya");