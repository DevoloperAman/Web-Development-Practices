// Given an object representing a shopping cart, write a function to calculate the total cost of items in the cart.


let cart = {
    apple: {
        item: "apple",
        price: 250
    },
    mango: {
        item: "mango",
        price: 600
    },
    iceCream: {
        item: "ice cream",
        price: 150
    },
    juice: {
        item: "juice",
        price: 100
    }
};


function calculateTotalCost(cart) {
    let totalCost = 0;

    // Loop through each item in the cart
    for (let key in cart) {

         totalCost += cart[key].price; // Add the price of each item to the total cost
    }

    return totalCost;
}

// Example cart object


// Calculate and print the total cost
let total = calculateTotalCost(cart);
console.log(`Total Cost: ₹${total}`);
