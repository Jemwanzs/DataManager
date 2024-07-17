let employeeData = [];

function nextStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
    document.getElementById(`step-${step}`).style.display = 'block';
}

function prevStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
    document.getElementById(`step-${step}`).style.display = 'block';
}

document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const employee = {};
    formData.forEach((value, key) => {
        employee[key] = value;
    });
    employeeData.push(employee);
    addEmployeeToTable(employee);
    alert('Employee data submitted!');

    // Reset form and go back to step 1
    e.target.reset();
    nextStep(1);
});

function addEmployeeToTable(employee) {
    const tableBody = document.querySelector('#employee-data-table tbody');
    const row = document.createElement('tr');

    Object.values(employee).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
}

function searchEmployee() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('employee-data-table');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}
