// 10. Count occurrence of a specific character

    
    function countOccurence(str, char){

            let obj = str.split("").reduce( (acc, curr) =>{

                    if(acc[curr]){
                        acc[curr]++;
                    }
                    else acc[curr] = 1 ;
                    return acc ;
            }, {})
            
            console.log(arr[char]);
            
    }

    countOccurence("programming", 'g') ;