// Write a function that accepts an object and returns a new object with keys and values swapped.

function swapKeysAndValues(obj) {
    const swapped = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapped[obj[key]] = key;
        }
    }
    return swapped;
}

console.log(swapKeysAndValues(original));


// Example usage:
var original = { a: 1, b: 2, c: 3 };
// const swapped = swapKeysAndValues
// console.log(swapped);


