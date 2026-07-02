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

//-------------------------------------------------------------------------------------------------------------------------

//Find duplicate cities

const getDuplicateCities = () => {
    const count={};
    for (let user in users){
        count[users[user].city] =(count[users[user].city] || 0) + 1;
    }
    const duplicateCities = [];
    for (let key in count){
        if (count[key] > 1){
            duplicateCities.push(key);
        }
    }
    return duplicateCities;
}

console.log("Duplicate Cities:", getDuplicateCities());

//output: Duplicate Cities: [ 'Hyderabad' ]

//-------------------------------------------------------------------------------------------------------------------------

//Count users in each city

const countUsersInEachCity = () => {
    const obj = {};
    for (let user in users){
        obj[users[user].city] = (obj[users[user].city] || 0) +1;
    }
    return obj;
}

console.log("Users in each city:", countUsersInEachCity());

//output: Users in each city: { 'Hyderabad': 2, 'Bangalore': 1, 'Chennai': 1, 'Pune': 1 }