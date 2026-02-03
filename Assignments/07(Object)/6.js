// 6. Check if an object is extensible, sealed, or frozen.

      let obj = {
        name : "Rohit Sisodiya",
        age : 22,
        course : "MERN"
    }
    // Object.freeze(obj) ;

    console.log(Object.isFrozen(obj));
    console.log(Object.isSealed(obj));
    console.log(Object.isExtensible(obj));

    //Object is Frozen and Sealed not Extensible.
    