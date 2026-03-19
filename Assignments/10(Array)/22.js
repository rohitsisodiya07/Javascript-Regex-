// 22. Convert array to object

        let arr = ["name","age","city"] ;

        let obj = arr.reduce( (acc, curr, index) => {

                acc[index] = curr ;
                return acc ;

        }, {})
        console.log(obj);
        