// Write a function that takes a number and returns the factorial of that number.
let number =1
function FactorialOfNumber(num){
    for(let i=num ; i>=1;i--){
        number= i*number
        
    }
    return  number
}

console.log(FactorialOfNumber(10));
