const employee = {
    name: "Grubby Greg",
    streetAddress: "101 HardSalts Cir"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    console.log(newEmployee);
    newEmployee[key] = value;
    return newEmployee;

}


console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "12 Broadway"
));


function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

console.log(deleteFromEmployeeByKey(employee, "name"));


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}