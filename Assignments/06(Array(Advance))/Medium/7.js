// Return only unique values using filter().

    let arr = [10, 20, 30, 10, 40, 20] ;
    let newArr = arr.filter( (value, index, self) => {

        return self.indexOf(value) == index ;
    })
    console.log(newArr);
    