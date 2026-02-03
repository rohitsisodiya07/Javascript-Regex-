// 9. Convert an object into a query string.
// { name: "abc", age: 25 } → "name=abc&age=25"

    let obj = {
        name : "Rohit",
        age : 22
    };
    let str = Object.entries(obj)
    .map( ([key, value]) => `${key}=${value}`).join("&")
    console.log(str);
    