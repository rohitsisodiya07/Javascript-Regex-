// 39. Create a countdown timer using a loop.

    let time = Number(prompt("Enter Countdown Time in Second = "))
    for( let i = time ; i >= 0 ; i--){

        console.log(i);
        if(i==0) console.log("Happy New Year!");     
    }