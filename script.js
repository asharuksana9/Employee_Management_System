let employees = [];
let editIndex = -1;

function renderEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  employees.forEach((emp, index) => {
    const row = `<tr>
      <td>${emp.name}</td>
      <td>${emp.role}</td>
      <td><a href="mailto:${emp.email}">${emp.email}</a></td>
      <td class="actions">
        <button class="edit" onclick="editEmployee(${index})">Edit</button>
        <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
      </td>
    </tr>`;
    employeeList.innerHTML += row;
  });
}

function addOrUpdateEmployee() {
  const name = document.getElementById('empName').value.trim();
  const role = document.getElementById('empRole').value.trim();
  const email = document.getElementById('empEmail').value.trim();

  if (!name || !role || !email) {
    alert('Please fill in all fields.');
    return;
  }

  const employee = { name, role, email };

  if (editIndex === -1) {
    employees.push(employee);
  } else {
    employees[editIndex] = employee;
    editIndex = -1;
    document.getElementById('submitBtn').textContent = 'Add Employee';
  }

  document.getElementById('empName').value = '';
  document.getElementById('empRole').value = '';
  document.getElementById('empEmail').value = '';

  renderEmployees();
}

function editEmployee(index) {
  const emp = employees[index];
  document.getElementById('empName').value = emp.name;
  document.getElementById('empRole').value = emp.role;
  document.getElementById('empEmail').value = emp.email;
  document.getElementById('submitBtn').textContent = 'Update Employee';
  editIndex = index;
}

function deleteEmployee(index) {
  if (confirm('Are you sure you want to delete this employee?')) {
    employees.splice(index, 1);
    renderEmployees();
  }
}
