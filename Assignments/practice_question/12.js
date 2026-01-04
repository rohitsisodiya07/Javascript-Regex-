// Write a function to swap two numbers without using a third variable.

function swapNum(n1, n2) {
  console.log(`n1 = ${n1}  n2 = ${n2}`);

  n1 = n1 + n2; // 45 + 63 = 108 ;
  n2 = n1 - n2; // 108 - 63 = 45 ;
  n1 = n1 - n2; // 108 - 45 = 63 ;

  console.log(`n1 = ${n1}  n2 = ${n2}`);
}

swapNum(45, 63);
