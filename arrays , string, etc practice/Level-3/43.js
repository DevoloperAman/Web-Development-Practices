//Given an array of strings, write a function that returns an array of strings that start with a specific letter.

const words = ["Apple", "Banana", "Avocado", "Cherry", "apricot", "blueberry"];

function filterByStartingLetter(arr , letter){
    return arr.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()))

}

const result = filterByStartingLetter(words, "a");
console.log(result);


