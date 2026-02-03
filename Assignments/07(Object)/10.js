// 10. Rename a key in an object.
// JS has no direct rename method
// We copy value to new key and delete old key

    let obj = {
        name : "Rohit",
        age : 22
    }
    obj.first = obj.name ;
    delete obj.name
    console.log(obj);
    