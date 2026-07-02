//Get users details whose salary is greater than 70000.

import users from "./users_object.js";

const getUsersDetails = () => {
    let userDetails = [];
    for(let user in users){
        if(users[user].salary > 70000){
            userDetails.push(users[user]);
        }
    }
    return userDetails;
}

console.log("Users details whose salary is greater than 70000:", getUsersDetails());

//output: Users details whose salary is greater than 70000: [
//   { id: 2, name: 'Rahul', age: 27, city: 'Mumbai', salary: 75000, department: 'Backend', isActive: true },
//   { id: 3, name: 'Sneha', age: 28, city: 'Bangalore', salary: 80000, department: 'Frontend', isActive: false },
//   { id: 4, name: 'Arjun', age: 30, city: 'Hyderabad', salary: 90000, department: 'Backend', isActive: true }
// ]

//-------------------------------------------------------------------------------------------------------------------------

//Calculate total salary of all employees.

const totalSalary = () => {
    let total = 0;
    for (let user in users){
        total += users[user].salary;
    }
    return total;
}

console.log("Total Salary of all employees:", totalSalary());

//output: Total Salary of all employees: 360000

//-------------------------------------------------------------------------------------------------------------------------

//Calculate average salary of all employees.

const averageSalary = () => {
    let totalSalary = 0;
    for (let user in users){
        totalSalary += users[user].salary;
    }
    const avgSalary = totalSalary / users.length;
    return avgSalary;
}

console.log("Average Salary of all employees:", averageSalary());

//output: Average Salary of all employees: 72000

//-------------------------------------------------------------------------------------------------------------------------

//Find User with highest salary

const highestSalary = () => {
    const salary = [];
    for (let user in users){
        salary.push(users[user].salary);
    }
    const sortSalary = salary.sort((a,b)=> a-b);
    const highestSalary = sortSalary[sortSalary.length - 1];
    for (let user in users){
        if(users[user].salary === highestSalary){
            return users[user];
        }
    }
}

console.log("User with highest salary:", highestSalary());

//output: User with highest salary: 
// { id: 4, name: 'Arjun', age: 30, city: 'Hyderabad', salary: 90000, department: 'Backend', isActive: true }
 
//-------------------------------------------------------------------------------------------------------------------------

//Find User with Lowest Salary

const lowestSalary = () => {
    const salary = [];
    for(let user in users){
        salary.push(users[user].salary);
    }
    const sortSalary = salary.sort((a,b)=>a-b);
    const lowestSalary = sortSalary[0];
    for (let user in users){
        if (users[user].salary === lowestSalary){
            return users[user];
        }
    }
}

console.log("User with lowest salary:", lowestSalary());

//output: User with lowest salary:
// { id: 1, name: 'Priyanka', age: 24, city: 'Hyderabad', salary: 65000, department: 'Frontend', isActive: true }

//-------------------------------------------------------------------------------------------------------------------------

//Find User with second highest salary

const secondHighestSalary = () => {
    const salary = [];
    for (let user in users){
        salary.push(users[user].salary);
    }
    const sortSalary = salary.sort((a,b)=>b-a);
    const secondHighestSalary = sortSalary[1];
    for (let user in users){
        if(users[user].salary === secondHighestSalary){
            return users[user];
        } 
    }
}

console.log("User with second highest salary:", secondHighestSalary());

//output: User with second highest salary:
// { id: 3, name: 'Sneha', age: 28, city: 'Bangalore', salary: 80000, department: 'Frontend', isActive: false }

//-------------------------------------------------------------------------------------------------------------------------

//Find User with second lowest salary

const secondLowestSalary = () => {
    const salary = [];
    for (let user in users){
        salary.push(users[user].salary);
    }
    const sortSalary = salary.sort((a,b)=>a-b);
    const secondLowestSalary = sortSalary[1];
    for (let user in users){
        if(users[user].salary === secondLowestSalary){
            return users[user];
        }
    }
}
console.log("User with second lowest salary:", secondLowestSalary());
