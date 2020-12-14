$(document).ready(onReady);

function onReady() {
  console.log('So ready!');

  // Handle Submit button click
  $('#newEmployeeBtn').on('click', addEmployee);
}

function addEmployee() {
  console.log('addEmployee was clicked');

  // Grab employee info from the DOM
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idInput').val();
  let title = $('#titleInput').val();
  let salary = $('#salaryInput').val();
  
  // Wrap the employee up in a
  // nice little object
  let employee = {
    firstName: firstName,
    lastName: lastName,
    id: id,
    title: title,
    salary: salary
  };
  console.log('employee to add is', employee);
}