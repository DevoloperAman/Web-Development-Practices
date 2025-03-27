//  Q4: Filter out odd numbers from an array.

const numbers = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers=[]
for(let num of numbers){
    if(num %3===0){
        oddNumbers.push(num)
    }
}

console.log(oddNumbers);



