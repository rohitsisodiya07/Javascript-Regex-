// Write a function to print Fibonacci series up to N terms.

function fibonacci(n) {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);

  let i = 2;
  while (i < n) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    i++;
  }
}

fibonacci(10);
