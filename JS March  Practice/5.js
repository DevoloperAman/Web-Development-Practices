// Write a function that finds the largest number in an array. 
let largest = 0
function findLargest(arr){
    for(a of arr){
        if(a>largest){
            largest = a
        }
    }
    return largest
}

console.log(findLargest([10,20,30,40,50,60]));
