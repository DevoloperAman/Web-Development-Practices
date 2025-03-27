// Write a function that returns the factorial of a given number `n`.
// Explanation : Demonstrates recursive logic and function creation for mathematical calculations.


let factorial = (num)=>{
    let value=1
    for( let i=1;i<=num;i++){
value=value*i
    }
    return value
    
}
console.log("The Factorial of your number is : "+ factorial(5));


