$(document).ready(onReady);

function onReady() {
  console.log('So ready!');

  // Handle Submit button click
  $(document).on('click', '#newEmployeeBtn', addEmployee);

  // Handle delete button click
  $(document).on('click', '.deleteBtn', deleteEmployee);
  console.log('delete buttons', $('#employeeTable'));
}

// Track total monthly costs for all employees
let totalMonthlyCost = 0;

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
    salary: Number(salary)
  };
  console.log('employee to add is', employee);

  // Append the employee to the DOM
  $('#employeeTable').append(`
    <tr>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.id}</td>
      <td>${employee.title}</td>
      <td>$${employee.salary}</td>
      <td><button class="deleteBtn">Delete</button></td>
    </tr>
  `);

  // Clear input fields
  $('#employeeForm input').val('');

  // Calculate monthly costs
  // How do we do this?
  // - For this employee, monthly cost = salary / 12
  // - add up monthly costs for all employees
  totalMonthlyCost += employee.salary / 12;
  $('#totalMonthlyCost').text(totalMonthlyCost);

  // Back BG color red, if >$20k
  if (totalMonthlyCost > 20000) {
    $('#totalMonthlyCost').addClass('overBudget');
  }
  else {
    $('#totalMonthlyCost').removeClass('overBudget');
  }
}

function deleteEmployee() {
  console.log('deleting an employee', $(this));

  // Remove the employee <tr> element
  let theButton = $(this);
  theButton.parents('tr').remove();
}