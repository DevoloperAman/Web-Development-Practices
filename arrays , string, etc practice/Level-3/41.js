// Write a program that converts a sentence into "Pig Latin."
function convertToPigLatin(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");
    
    // Map over each word to convert it into Pig Latin
    let pigLatinWords = words.map(word => {
        let firstLetter = word[0].toLowerCase();
        
        // Check if the word starts with a vowel
        if ("aeiou".includes(firstLetter)) {
            return word + "way";  // Add 'way' if the word starts with a vowel
        } else {
            // Move the first letter to the end and add 'ay'
            return word.slice(1) + firstLetter + "ay";
        }
    });

    // Join the converted words back into a sentence
    return pigLatinWords.join(" ");
}

// Example usage
let sentence = "Hello how are you";
let pigLatinSentence = convertToPigLatin(sentence);

console.log(pigLatinSentence);  // Output: "ellohay owhay areway ouyay"
