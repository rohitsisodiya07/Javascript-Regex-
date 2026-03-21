// 45. Remove objects with duplicate ids

    let arr = [{id:1,name:'A'},{id:2,name:'B'},{id:1,name:'C'}] ;

    let sets = new Set() ;

    let newArr = arr.filter( res => {

            if(sets.has(res.id)){
                return false ;
            }
            sets.add(res.id) ;
            return true ;
    })
    console.log(newArr);