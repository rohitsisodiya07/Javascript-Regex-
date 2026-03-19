// 18. Find frequency of elements.

    let arr = [1,2,2,3,3,3,4] ;
    let map = {} ;
    arr.forEach( (res) => {

            if(map[res]){
                map[res]++;
            }
            else map[res] = 1 ;
    })
    console.log(map);
    