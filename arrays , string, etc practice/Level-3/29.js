// Write a program that finds the longest word in a sentence.
function findLongestWord(sentence){
    const words = sentence.split(' ')
    let longest = '' ; 
    for (let word of words){
        if(word.length>longest.length){
            longest=word
        }
    }
    return longest
}

const sentence= "I love you so much my wife salonu  "
console.log(findLongestWord(sentence));
