// 6 Given an array of user objects, find the sum of ages of users whose age is greater than 18.

    let users = [

        {Name:"amit" , age : 17},
        {Name:"amit" , age : 19},
        {Name:"amit" , age : 21},
        {Name:"amit" , age : 18}
    ]

    // Using Reduce
    let sum = users.reduce( (acc, curr) => {

        if( curr.age > 18 ) acc+=curr.age ;
        return acc ;
    }, 0)
    console.log(sum);
    
    