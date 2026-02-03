//20. Sort an object by its values.

    let obj = {
        1 : 15,
        2 : 33,
        3 : 12,
        4 : 14,
        5 : 11
    }
    let sortedObj = Object.fromEntries( Object.entries(obj).sort( (a, b) => a[1]-b[1]) );
    console.log(sortedObj);
    console.log(Object.entries(sortedObj));

    
    