// Reverse a string.
function ReverseString(str) {
  return str.split("").reverse().join("");
}

console.log((ReverseString("My name is aman")));


/*  Method 
1. Split the string into an array of characters. [str.split("")]
2. Reverse the array. [str.reverse()]
3. Join the array back into a string. [str.join("")] */