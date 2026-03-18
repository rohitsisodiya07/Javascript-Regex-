// 24. Find second most frequent character.

    let str = "programmingr" ;
//     let largest = 
//     let second = -1;
    let obj = str.split("").reduce( (acc, curr) => {

            if( acc[curr]){
                acc[curr]++;
            }
            else acc[curr] = 1 ;
            return acc;

    }, {}) ;
    let arr = Object.entries(obj).sort( (a, b) => (b[1] - a[1]))[1] ;
    console.log(arr);
    
    