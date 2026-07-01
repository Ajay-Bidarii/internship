
let employee = {
    id: 101,
    name: "Ajay",
    department: "IT",
    salary: 50000
};


console.log("Original Employee Object:");
console.log(employee);


employee.address = "Kathmandu";

console.log("After Adding Address:");
console.log(employee);


employee.salary = 60000;

console.log("After Updating Salary:");
console.log(employee);


delete employee.department;

console.log("After Deleting Department:");
console.log(employee);