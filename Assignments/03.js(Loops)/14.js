// 14. Calculate the sum of digits of a number.

        let sum = 0 ;
        let num = 64825 ;
        while(num){
                let last = num % 10 ;
                sum = sum + last ;
                num = Math.floor(num / 10) ;
        }
        console.log(sum);
        
