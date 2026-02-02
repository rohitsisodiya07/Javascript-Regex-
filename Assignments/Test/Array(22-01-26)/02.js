//  Find the missing number in the sequence.

let arr = [100, 101, 102, 103, 104, 106] ;

let start = Math.min(...arr)
let end = Math.max(...arr)

let sum1 = 0;
for (let i = start; i <= end; i++) {
  sum1 += i;
}

let sum2 = arr.reduce((acc, curr) => {
   return acc += curr ;
}, 0);

console.log(sum1 - sum2);
