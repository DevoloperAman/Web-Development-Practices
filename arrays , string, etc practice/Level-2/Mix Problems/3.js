// 🔧 Problem : Filter Out Odd Numbers from an Array
// Write an arrow function that takes an array of numbers and returns a new array with only even numbers.

const arr=[1,2,3,4,5,6,7,8,9,47,49,59,5756,154,64,684,684,5,64,4,654,10];
const even = arr.filter((num) => num % 2 === 0);

console.log(even);
