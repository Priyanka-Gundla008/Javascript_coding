//Get users details by age

import users from "./users_object.js";

const getUsersDetailsByAge =(age) => {
    let usersByAge = [];
    for (let user in users){
        if(users[user].age === age){
            usersByAge.push(users[user]);
        }
    }
    return usersByAge;
}
const usersWithAge24 = getUsersDetailsByAge(24);
const usersWithAge28 = getUsersDetailsByAge(28);
const usersWithAge27 = getUsersDetailsByAge(27);

console.log("Users with age 24:", usersWithAge24);
console.log("Users with age 28:", usersWithAge28);

if(usersWithAge27.length === 0) {
    console.log("No users found with age 27");
} else{
    console.log("Users with age 27:", usersWithAge27);

}

//output: Users with age 24: [
//   { id: 1, name: 'Priyanka', age: 24, city: 'Hyderabad', salary: 65000, department: 'Frontend', isActive: true }
// ]

//output: Users with age 28: [
//   { id: 2, name: 'Rahul', age: 28, city: 'Bangalore', salary: 80000, department: 'Backend', isActive: false }
// ]

//output: No users found with age 27