//Get all users from Hyderabad

import users from "./users_object.js";

const getUsersFromHyd=()=> {
    let usersFromHyd = [];
    for (let user in users){
        if(users[user].city === "Hyderabad"){
            usersFromHyd.push(users[user]);
        }
    }
    return usersFromHyd;
}

console.log("Users from Hyderabad:", getUsersFromHyd());

//output: Users from Hyderabad: [
//   { id: 1, name: 'Priyanka', age: 24, city: 'Hyderabad', salary: 65000, department: 'Frontend', isActive: true },
//   { id: 4, name: 'Arjun', age: 30, city: 'Hyderabad', salary: 90000, department: 'Backend', isActive: true }
// ]