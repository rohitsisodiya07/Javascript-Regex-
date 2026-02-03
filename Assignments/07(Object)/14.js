// 14. Flatten a nested object
// { a: { b: { c: 1 } } } → { "a.b.c": 1 }

    let obj = {

        a : {
            b : {
                c : 1
            }
        }
    }

    console.log(Object.entries(obj).flat(Infinity));
        