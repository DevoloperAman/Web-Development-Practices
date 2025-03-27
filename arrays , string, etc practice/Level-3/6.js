//  Given an array of objects with `name` and `age`, write a function that filters out and prints only the objects where the age is greater than 18.

let Details = [

    { name:"Aman" ,  age:15 },
    { name:"Nayan" ,  age:17 },
    { name:"Satyam" ,  age:16 },
    { name:"Raunak" ,  age:21 },
    { name:"Pihu" ,  age:22 }

]

const Adults = ()=>{
    for( let elements of  Details){
        if(elements.age>18){
            console.log(elements);
            
        }
        
    }
}

(Adults());
