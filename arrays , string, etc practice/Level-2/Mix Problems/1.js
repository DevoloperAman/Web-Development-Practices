 // Write a function that take two arrays and returns the new array with no dulicated values.

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function noDuplicate(arr1 ,arr2){
    const merged = [...arr1 ,...arr2];
    return [...new Set(merged)];
}

console.log(noDuplicate(arr1, arr2));


bkl