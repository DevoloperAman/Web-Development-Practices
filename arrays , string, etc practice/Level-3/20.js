// Create a function that takes an array and returns a new array with duplicate elements removed


let arr=["Manihs","Rajnish","Jaydeep","Manihs"]
function RemoveDuplicateVAlue(){

    let newArrys = [...new Set(arr)]
console.log(newArrys);

}

RemoveDuplicateVAlue()