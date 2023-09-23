// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "New York");
  console.log(updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(employee);
  
  const employeeWithoutCity = deleteFromEmployeeByKey(employee, "city");
  console.log(employeeWithoutCity);
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employee);
  