// 18. Remove special characters


    let str = "Rohit!@#$%^&*()<>,.?><;'{}" ;
    let special = "`~!@#$%^&*()_-+=/*+.{}|[]\:;'<>?,./" ;

    let ans = "" ;
    for( let i = 0 ; i < str.length ; i++){

            if(!special.includes(str[i])) {
                ans += str[i] ;
            }
    }
    console.log(ans);
    