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