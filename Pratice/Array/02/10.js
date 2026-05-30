//Most Frequency Character


let str = "Rohit Sisodiya" ;
let map = {} ;
let large = 0 ;
let char = "";

    for( let ch of str){

        map[ch] = (map[ch] || 0) + 1 ;
        if( map[ch] > large){
            large = map[ch] ;
            char = ch ;
        }
    }
    console.log(char);
    console.log(large);
    