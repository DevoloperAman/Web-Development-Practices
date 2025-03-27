// Create a program that generates a random number between 1 and 10 until the number 7 is generated.

function GenerateRandomUntilSeven (){
    let number ;

    do {
        number = Math.floor(Math.random() * 10) ;
        console.log("Generated number:", number);
    } while (number !== 7);
    
    console.log("Number 7 generated! Stopping the loop.");
}

console.log(GenerateRandomUntilSeven());