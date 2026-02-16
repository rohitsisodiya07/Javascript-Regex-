//20. Sort an object by its values.

    let obj = {
        1 : 15,
        3 : 33,
        2 : 12,
        5 : 14,
        4 : 11
    }
    let sortedObj = Object.fromEntries( Object.entries(obj).sort( (a, b) => a[1]-b[1]) );
    console.log(sortedObj);
    console.log(Object.entries(sortedObj));

    
    