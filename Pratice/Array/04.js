//First Non Repeating Character

// let str = "javascript" ;

// let check = [... new Set(str)][0]
// console.log(check);


let str = "swiss" ;
let map = {} ;

for( let ch of str){

        if(map[ch]){

                map[ch]++ ;
        }
        else map[ch] = 1 ;
}
for( let ch of str){

    if(map[ch] === 1) {
        console.log(ch);
        return 0 ;
    }
    
}