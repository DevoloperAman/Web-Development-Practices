// Problem Statement:
/*You have an object that contains employee names and their monthly salaries. Write a function to calculate the total yearly salary for all employees. */

const Employees ={
    Aman :120000,
    Alice : 80000,
    Bob:45000,
}

let TotalSalary = 0
for(key in Employees){
    
    TotalSalary += Employees[key];
    
}
console.log("Total Salary given to each Employe is :  "+TotalSalary);jxx  