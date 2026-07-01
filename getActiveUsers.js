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