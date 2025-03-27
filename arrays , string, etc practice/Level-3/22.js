// Write a program that reverses a given string without using built-in functions.
function reverseString(str) {
    let reversedStr = '';  // Initialize an empty string to store the reversed string
    
    // Loop through the string from the last character to the first
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];  // Add each character to the reversed string
    }
    
    return reversedStr;
}

let inputStr = "Hello World!";
console.log(reverseString(inputStr));  // Output: "!dlroW olleH"
