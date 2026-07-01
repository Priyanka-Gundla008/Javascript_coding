//Get department names of all users

import users from "./users_object.js";

const getDepartmentName = () => {
    const departmentNames = [];
    for (let user in users){
        departmentNames.push(users[user].department);
    }
    return departmentNames;
}

console.log("Department Names:", getDepartmentName());

//output: Department Names: [ 'Frontend', 'Backend', 'Frontend', 'Backend', 'Frontend' ]

//-----------------------------------------------------------------------------------------------

//Get unique department names of all users

const getUniqueDepartment = () => {
    let departmentNames = [];
    for (let user in users){
        departmentNames.push(users[user].department);
    }
    const uniqueDepartments = [ ...new Set(departmentNames)];
    return uniqueDepartments;
}

console.log("Unique Department Names:", getUniqueDepartment());

//output: Unique Department Names: [ 'Frontend', 'Backend' ]

//-----------------------------------------------------------------------------------------------

//Get users details by department and city

const getUsersDetailsByDepartmentAndCity = (department, city) => {
    let usersDetails = [];
    for (let user in users){
        if(users[user].department === department &&
            users[user].city === city){
                usersDetails.push(users[user]);
            }
    }
    return usersDetails;
};

console.log("Users from Frontend department and Hyderabad city:", getUsersDetailsByDepartmentAndCity("Frontend", "Hyderabad"));

//output: Users from Frontend department and Hyderabad city: [
//   { id: 1, name: 'Priyanka', age: 24, city: 'Hyderabad', salary: 65000, department: 'Frontend', isActive: true }
// ]
