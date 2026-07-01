//Get user details by id

import users from "./users_object.js";

const getUserById =(id)=>{
    let userDetails = [];
    for(let user in users){
        if(users[user].id === id){
            userDetails.push(users[user]);
        } 
    } 
    return userDetails;
};

console.log("User details by id:", getUserById(3));

//output: User details by id: [
//   { id: 3, name: 'Sneha', age: 28, city: 'Bangalore', salary: 80000, department: 'Frontend', isActive: false }
// ]