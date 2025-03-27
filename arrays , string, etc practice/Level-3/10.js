// Given an array of strings, write a function that returns the longest string in the array.

let str = ["Aman","Saloni","Kirti","Mahendra","Surendra"]

function findLongestString(){
    let longest=""
    for(let elements of str){
        if(elements.length>longest.length){
            longest = elements
        }
    }
    return longest
}

console.log(findLongestString(str));
