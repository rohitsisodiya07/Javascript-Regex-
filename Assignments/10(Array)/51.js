// 51. Find average age in object array

    let arr = [{name:'A',age:20},{name:'B',age:25},{name:'C',age:30}] ;

    let count = 0 ;

    let sum = arr.reduce( (acc, curr) => {

        count++; 
        return acc+curr.age ;
    }, 0)

    console.log("Average Age", sum/count);
    