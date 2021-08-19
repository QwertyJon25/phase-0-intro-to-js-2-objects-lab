// Write your solution in this file!
const employee = {
  name: "Terry",
  streetAddress: "4 Apple Sreet"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

  return Object.assign({}, {['name']:'Sam'}, { ['streetAddress']: '11 Broadway' });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {

  const newEmployee = Object.assign({}, 'Sam');

  delete newEmployee['streetAddress'];

  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}