// Write a function that uses `for...of` to add only positive numbers from an array `[-3, 4, -1, 5]`.

let numbers = [-1,2,3,-8,5,6,9,10,-45,85,0,41,48,9,62,-75]

for(positiveList of numbers){
    if(positiveList>0){
        console.log(positiveList);
        
    }
}