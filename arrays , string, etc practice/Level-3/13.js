// Write a function that accepts an array of numbers and returns a new array with each number squared.
function SquareMakaer(arr){
    let newElements=[]
    for (let elements of arr){
        newElements.push(elements*elements)
        
    }
    return newElements 
}

let arr = [10,20,30]
console.log(SquareMakaer(arr));

