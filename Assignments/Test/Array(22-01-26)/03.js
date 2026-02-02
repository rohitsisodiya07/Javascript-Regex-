// 3. Find the intersection of the following two arrays.
      let arr1 = [1, 2, 5, 8]
      let arr2 = [5, 6, 8, 9]

      ///Using Filter
    //   let inter = arr1.filter( num => arr2.includes(num) )
    //   console.log(inter);
    
    
    //Using Reduce
    let inter = arr1.reduce( (acc, curr) => {
        
        if( arr2.includes(curr)){
            acc.push(curr) ;
        }
        return acc ;
        
    }, [])
      console.log(inter);