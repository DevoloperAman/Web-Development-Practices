//   Q4:  Check if a specific key exists in an object.

const student = { name: "Sarah", grade: "A", age: 20 };

for(let key in student){
    if(student[key]==="Sarsah"){
        console.log("Yes the Student Exist");
    }
    else{
        console.log("No the Student does not Exist");
    }
}