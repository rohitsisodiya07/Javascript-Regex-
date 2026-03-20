// 52. Group objects by property

    let arr = [{name:'A',city:'Delhi'},{name:'B',city:'Mumbai'},{name:'C',city:'Delhi'}] ;


    let obj = arr.reduce( (acc, curr) => {

            if( !acc[curr.city]){

                    acc[curr.city] = [] ;
            }
            acc[curr.city].push(curr) ;
            return acc ;
    }, {})
    console.log(obj);
    