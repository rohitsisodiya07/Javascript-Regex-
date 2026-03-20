// 50. Sum values in object array

    let arr = [{price:100},{price:200},{price:300}] ;

    let sum = arr.reduce( (acc, curr) => {

            return acc + curr.price ;
    }, 0) ;

    console.log(sum);
    