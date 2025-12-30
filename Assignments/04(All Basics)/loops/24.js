// Check Armstrong number.

function getdigit(num){
    let count = 0 ;
    while(num){
        count++;
        num = parseInt(num / 10);
    }
    return count ;
}

function checkArm(num){

    let count = getdigit(num) ;
    let temp = num ;
    let cube = 0 ;
    while(num){
        let last = num % 10 ;
        cube = cube + (last ** count) ;
        num = parseInt( num / 10) ;
    }
    if( temp == cube ) return true ;
    else return false ;  
}

if(checkArm(1634)) console.log("ArmStrong Number");
else console.log("Not ArmStrong Number");

