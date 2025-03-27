// Write a function that checks if a given string contains only unique characters.

function HasUniquesCharacter(str){
    const letterSet = new Set (str);
    return letterSet.size ===str.length
}

console.log (HasUniquesCharacter("aman"))