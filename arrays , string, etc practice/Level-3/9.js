//  Write a program that sorts an array of numbers in descending order.

function sortDesending(arr){
    return arr.sort((a,b) => b-a)
}


let num= [10,20,50,60,4,54,1,5,8,4,6,1,2]
console.log(sortDesending(num));