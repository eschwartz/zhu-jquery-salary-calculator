$(document).ready(onReady);

function onReady() {
  console.log('So ready!');

  $('#newEmployeeBtn').on('click', addEmployee);
}

function addEmployee() {
  console.log('addEmployee was clicked');

  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idInput').val();
  let title = $('#titleInput').val();
  let salary = $('#salaryInput').val();
  
  let employee = {
    firstName: firstName,
    lastName: lastName,
    id: id,
    title: title,
    salary: salary
  };
  console.log('employee to add is', employee);
}