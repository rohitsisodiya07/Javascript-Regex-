// 28. What are Symbols and how are they used as object keys?
// = Symbol is a Unique and immutable primitive used as a unique object key.

    let id = Symbol("id")

    let user = {
        name : "Rohit",
        age : 22,
        [id] : 101
    }
    console.log(user[id]); // Cannot Access Symbol key using dot notation.
    