//    Q1: Iterate through an object and print its keys and values.

let Car={Model:"BMW",Year:2020,Color:"Black"};

for(let key in Car){
    console.log(key + ":" + Car[key]);
}

/*

@ = key = Property name (like "Model", "Year", "Color").
@ = Car[key] = Value of that property (like "BMW", 2020, "Black").
@ = The for...in loop reads every property of the object and prints both the name and value.

*/
