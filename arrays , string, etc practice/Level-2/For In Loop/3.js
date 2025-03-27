// Question : Count the number of properties in an object.

const car = { brand: "Toyota", model: "Corolla", year: 2020 };

let Count=0
for( let key in car){
    Count++ ; 
}
console.log(Count)