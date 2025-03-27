// Write a function that accepts an object and returns an array of its values.
// function getObjectValues(obj) {
//     return Object.values(obj);
// }

// // Example usage:
// const person = { name: "Aman", age: 25, city: "Delhi" };
// console.log(getObjectValues(person));


function getObjectValues(obj){
    let ValueArray=[]
    for(let key in obj){
        ValueArray.push(obj[key])
    }
    return ValueArray
}
const person = { name: "Aman", age: 25, city: "Delhi" };
console.log(getObjectValues(person));



// We CAn use both methods 

