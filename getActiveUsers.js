//Get all active users from the users object

import users from "./users_object.js";

const getActiveUsers =() => {
    let activeUsers = [];
    for (let user in users){
        if(users[user].isActive){
            activeUsers.push(users[user]);
        }
    }
    return activeUsers;
}

console.log("Active Users:", getActiveUsers());

//output: Active Users: [
//   { id: 1, name: 'Priyanka', age: 24, city: 'Hyderabad', salary: 65000, department: 'Frontend', isActive: true },
//   { id: 2, name: 'Rahul', age: 26, city: 'Bangalore', salary: 75000, department: 'Backend', isActive: true },
//   { id: 4, name: 'Arjun', age: 30, city: 'Hyderabad', salary: 90000, department: 'Backend', isActive: true }
// ]

//----------------------------------------------------------------------------------------------------------------------------

//Count the number of active users in the users object

const totalActiveUsers = () => {
    let activeUsers = 0;
    for (let user in users){
        if(users[user].isActive){
            activeUsers += 1;
        }
    }
    return activeUsers;
};

console.log("Total Active Users:", totalActiveUsers());

//output: Total Active Users: 3
