// 4. Define a function that takes a number and returns `true` if it’s between 10 and 20 (inclusive) using logical operators (`&&`, `||`).
//  - Explanation : Teaches compound conditions with logical operators.

function test ( a){
    if(a<=20 && a>=10){
        console.log("Yes the nuber is in the given criteria");
    }

    else{
        console.log("No the nuber is not in given criteria");
        
    }
}

test(15)