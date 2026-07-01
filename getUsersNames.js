//Get all the users names from the users object and return them in an array.

import users from "./users_object.js";

const getUserNames =()=> {
    let userNames = []
    for (let user in users){
        userNames.push(users[user].name);
    }
    return userNames;
}

console.log("User Names:", getUserNames());

//output: User Names: [ 'Priyanka', 'Rahul', 'Sneha', 'Arjun', 'Kiran' ]