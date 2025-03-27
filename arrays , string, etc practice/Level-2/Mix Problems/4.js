// Write a Function to Count the Vovle in a String
const sentence = "Hello, how are you?";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for(let val of sentence.toLowerCase()){
    if(vowels.includes(val)){
        count++;
    }

}

console.log(count);
