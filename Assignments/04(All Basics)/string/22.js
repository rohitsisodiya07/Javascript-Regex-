// Check if the string is an anagram.

function checkAnagram( str1, str2){

    if( str1.length != str2.length ) return false ;
    let s1 = str1.toLowerCase().split('').sort().join('');
    let s2 = str2.toLowerCase().split('').sort().join('');
    // console.log(s1);
    // console.log(s2);
    if( s1 == s2 ) return true ;
    else return false ;
}

console.log(checkAnagram("listen", "silent")) ;