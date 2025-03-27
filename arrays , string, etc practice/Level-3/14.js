// Use a `while` loop to keep asking the user to enter a number until they enter a negative number.

function askNumber() {
    let number = parseInt(prompt("Enter a number:"));  // Ask the user for a number
    while (number >= 0) {  // Keep asking until the number is negative
        number = parseInt(prompt("Enter a number:"));  // Ask again if the number is not negative
    }
    console.log("You entered a negative number. Program stopped.");
}

askNumber();  // Call the function
