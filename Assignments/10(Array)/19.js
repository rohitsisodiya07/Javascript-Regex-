// 19. Find majority element

    let arr = [2,2,1,2,3,2,2] ;
    let map = {} ;
    arr.forEach( (res) => {

            if(map[res]){
                map[res]++;
            }
            else map[res] = 1 ;
    })
    let largest = -1 ;
    for( let key in map){

            if( map[key] > largest){
                largest = key
            }
    }
    console.log(largest);
    