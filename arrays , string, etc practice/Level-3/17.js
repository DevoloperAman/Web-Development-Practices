//Create a function that takes a sentence and returns the number of words in it.

let sentence = "My name is aman gupta"

let count = 0
for(let i = 0 ;i<=sentence.length;i++)
    if(sentence[i] !==" "){
        count++
    }
        
console.log(count);

