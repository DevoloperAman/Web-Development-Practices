// Write a function that accepts an array and returns the largest difference between any two numbers in the array.

function largestDifference(arr){
    if(arr.length <2) return 0;

    let min= Math.min(...arr)
    let max = Math.max(...arr)

    return max-min ;
}

let number = [10,20,30,40,50,6,70,800]

console.log(largestDifference(number));
