// Write a program that takes an array of numbers and prints the sum of all even numbers.
let arr=[10,25,69,56,44,78,2,12,14,48,89]
let sum =0

for (let elements of arr){
    if(elements%2===0){
        sum=sum+elements
    }
}

console.log(sum);
