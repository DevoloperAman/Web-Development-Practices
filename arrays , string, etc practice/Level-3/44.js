//Create a function that accepts a string and returns the string with all vowels removed.

var str = "My name is Aman Bhau "
let vowels = ["a","e","i","o","u"]
let newStr = str.toLowerCase()
                .split( "")
                .filter(char => vowels.includes(char))
                .join("")
                
console.log(newStr);
