//Remove Duplicate

function removeDuplicate(str){
    return [... new Set(str)].join("")
}

console.log(removeDuplicate("aabbccd"));
