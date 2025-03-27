//  Create a function that returns the Fibonacci series up to a given number.









function fibonacciSeries(limit) {
    let fibSeries = [0, 1];  // Start with the first two numbers
    
    // Keep generating Fibonacci numbers until the next number exceeds the limit
    while (true) {
        let nextNumber = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        
        // If the next number exceeds the limit, break the loop
        if (nextNumber > limit) {
            break;
        }
        
        fibSeries.push(nextNumber);  // Add the next Fibonacci number to the series
    }

    return fibSeries;

}

  { console.log(fibonacciSeries(10));  // [0, 1, 1, 2, 3, 5, 8] 
