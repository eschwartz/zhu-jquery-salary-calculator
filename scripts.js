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

/**
 * Handle "Submit" button to add an employee
 * Renders the employee to the table
 * Updates the monthly cost
 * Makes cost red if >$20k
 */
function addEmployee() {
  console.log('addEmployee was clicked');

  let employee = getEmployeeFromDOM();

  renderEmployee(employee);

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
  // Reset background color, if <$20k
  else {
    $('#totalMonthlyCost').removeClass('overBudget');
  }
}

function getEmployeeFromDOM() {
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

  return employee;
}

function renderEmployee(employee) {
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
}

/**
 * Delete employee from the DOM
 * 
 * NOTE: does not update total monthly costs
 */
function deleteEmployee() {
  console.log('deleting an employee', $(this));

  // Remove the employee <tr> element
  let theButton = $(this);
  theButton.parents('tr').remove();
}