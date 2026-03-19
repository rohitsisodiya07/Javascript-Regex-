// 48. Convert array of objects to object

    let arr = [{id:1,name:'A'},{id:2,name:'B'}] ;

    let obj = arr.reduce( (acc, curr) => {

            acc[curr.id] = curr.name ;
            return acc ;

    }, {})
    console.log(obj);
    