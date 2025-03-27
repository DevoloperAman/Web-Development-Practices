// Given a string, write a function that checks if it contains any digits.
const str= ['h', 'e', 'l', 'l', 'o', '1', '2', '3'];
const result = str.filter(char => {
    return char >= '0' && char <= '9'
});

console.log(result); // ['1', '2', '3']
