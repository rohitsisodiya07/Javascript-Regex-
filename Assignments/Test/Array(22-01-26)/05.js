// 5. Count the frequency of each element in the array.
      let arr =  [1, 2, 1, 2, 1, 2, 3, 4, 4, 6] ;

      let obj = arr.reduce( (acc, curr) => {

                if(acc[curr]){
                    acc[curr]++ ;
                }
                else{
                    acc[curr] = 1 ;
                }
                return acc ;

      }, {})
      console.log(obj);
      