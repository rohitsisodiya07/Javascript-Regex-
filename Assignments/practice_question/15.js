//15. Write a function to find the next palindrome number after a given number.


function checkpallindrome(number) {
    number++ ;
    while(true){
            let num = number ;
            let temp = number ;
            let rev = 0;
            while (num) {
                rev = rev * 10 + (num % 10);
                num = parseInt(num / 10);
            }
        if (temp == rev) return number;
        number++;
    }
}
console.log(checkpallindrome(101))