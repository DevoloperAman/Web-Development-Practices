//  Write a program to count how many times a specific character appears in a given string.
function countCharacterOccurrences(str, char) {
    let count = 0;

    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {

        //Check if the current character matches the target character
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}



// Example usage
const inputString = "hello world";
const targetChar = "o";
const result = countCharacterOccurrences(inputString, targetChar);

console.log(`The character '${targetChar}' appears ${result} times in the string.` + inputString);
