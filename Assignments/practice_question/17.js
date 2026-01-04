//17. Write a function to check whether a string contains a given word

function containWord(str, word) {
  temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      if (temp === word) return true;
      temp = "";
    } else temp += str[i];
  }
  if (temp === word) return true;
  return false;
}
if (containWord("Hey Man My Name is Rohit Sisodiya", "Rohit"))
  console.log("Word Contain ");
else console.log("Word Not Contain");
