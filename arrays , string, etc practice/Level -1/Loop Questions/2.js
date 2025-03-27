// Write a `for` loop to print each element of the array `["apple", "banana", "cherry"]` with its index (e.g.0:'apple`).
//  - Explanation : Teaches accessing array elements by index and combining values with indices.

let fruits = ["Apple","Santaraa","Musambi","Banana" , "Guava"]
function fruitsCount(arr){
    for( let i=0 ; i<arr.length ; i++){
        console.log(i+ ":" +  arr[i]);
        
    }
}

console.log(fruitsCount(fruits ));

//  Key Point
// Jab kabi bhi h (i) ko print kerenge to sifr index hi print hoga but jab [i] to kisi bhi array ke element bhi print hoga.
