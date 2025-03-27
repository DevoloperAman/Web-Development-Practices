//  Q5: Convert an object's keys into an array.

const book = { title: "1984", author: "George Orwell", pages: 328 };

const keys = [];
for (let key in book){
    keys.push(key)
}
console.log(keys)