//   Question :- You want to calculate the sum of all even numbers from 1 to 100 using a for loop.
let sum= 0;
for(let i=1;i<=100;i++){
    if(i%2===0){
        sum+=i;
    }
}

console.log(sum);