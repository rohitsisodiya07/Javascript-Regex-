// 18. What is Object.assign()?
// = It Creates Shallow Copy

    let obj = {
        name : "Rohit",
        age : 22
    }

    let obj2 = Object.assign({}, obj) ;//Copies Top Level Properties
    console.log(obj2);