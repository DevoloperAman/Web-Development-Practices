// Given an array of numbers, write a program that prints the second  highest number.

function SecondHighest(arr){
    let uniqueNumber = [...new Set(arr)].sort((a,b)=> b-a)
    if(uniqueNumber.length<2){
        return("No Second Highest number");
    }
    return uniqueNumber[1]
}
let arr = [10,20,30,40,50,60,80]
console.log(SecondHighest(arr));
