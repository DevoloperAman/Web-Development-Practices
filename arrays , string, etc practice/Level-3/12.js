// Write a program that converts a string to title case (capitalizes the first letter of each word).

let str = ["amam","Mohan","Parmod"]
for(let elements of str){
    let updated = elements[0].toUpperCase()+elements.slice(1).toLowerCase()
    console.log(updated);
    
    
}
