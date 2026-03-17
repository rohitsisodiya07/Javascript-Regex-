// 11. Remove duplicate characters from a string.

    let str = "programming";
    let arr = str.split("") ;
    let ans = [... new Set(arr)].join("") ;
    console.log(ans);
    