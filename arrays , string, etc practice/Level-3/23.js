// Create a program that calculates the number of vowels and consonants in a string.

let vovels = ["a","e","i",'o',"u"]
let count = 0

function CalculateNumberOfVovel(str){
    let newStr = str.counttoLowercase()
    for(let a)
    if(vovels.include(newStr)){
        count++
    }
    console.log(count);
    

}

CalculateNumberOfVovel("My name is aman")