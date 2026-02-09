// 29. What is optional chaining (?.) with objects?
//= Optional Chaining lets you safely access nested properties without causing an error
//  is Something is Missing.

    let obj = {
        name : "Rohit",
    }
    // console.log(obj.address.city); //Shows Error
    console.log(obj?.address?.city);
    