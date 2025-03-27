// Create a program that calculates the sum of digits in a given number

let number = [10,20,30,40,50,60]
let sumOfDigit = 0
function DigitsSumation(){
    for(let val of number){
        sumOfDigit=sumOfDigit+val
    }
    
    return sumOfDigit
}

console.log(DigitsSumation(number));
