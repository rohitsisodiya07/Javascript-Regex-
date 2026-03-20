// 55. Find duplicate objects

    let arr = [{id:1,name:'A'},{id:2,name:'B'},{id:1,name:'A'}] ;
    let sets = new Set() ;

    let obj = arr.filter( (res) => {

            if(sets.has(res.id)){
                return true ;
            }
            sets.add(res.id) ;
            return false ;
    });
    console.log(obj);
    