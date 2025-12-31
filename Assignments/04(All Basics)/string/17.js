// Convert sentence to title case.

function capitalFirst(str) {
  res = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) res += str[i].toUpperCase();
    else res += str[i];
  }
  return res;
}

function convertTitle(str) {
  word = "";
  res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      res += capitalFirst(word);
      res += " ";
      word = "";
    } else word += str[i];
  }
  res += capitalFirst(word);
  console.log(res);
}
convertTitle("hey i am rohit");
