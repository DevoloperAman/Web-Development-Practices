// Write a function that takes an array and returns the most frequent element.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 47, 49, 59, 5756, 154, 64, 684, 684, 5, 64, 4, 654];
const MostFrequent = (arr) => {
    let count = {};
    let max = 0;
    let result;
    for (let val of arr) {
        count[val] = (count[val] || 0) + 1;
        if (count[val] > max) {
            max = count[val];
            result = val;
        }
    }
}