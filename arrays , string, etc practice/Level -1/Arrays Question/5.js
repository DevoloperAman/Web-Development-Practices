// Write a function to find the number of occurrences of a specific element (e.g., `4`) in an array `[1, 4, 4, 3, 4, 5]`.

//  - Explanation : Counting occurrences of a value within an array is a commonrequirement for data processing.


let list = [1,2,3,4,4,5,5,6,6,6,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1]
let count =  0
function ginati(arr , target){
    let count =  0
    for( let i=0 ; i<arr.length ;i++){
        if(arr[i]===target){
            count++
        }
    }
    return count
}
console.log(ginati(list,3));
