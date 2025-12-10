// 34. Convert decimal to binary using loop.

    let num = 154 ;
    let binary = "";
    while(num){

            let last = num % 2 ;
            binary = last + binary ;
            num = Math.floor(num / 2) ;
    }
    console.log(binary);
    