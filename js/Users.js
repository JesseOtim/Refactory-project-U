

window.onload = function () {
  let firstname = localStorage.getItem('firstname');
  let lastname = localStorage.getItem('lastname');
  let phonenumber = localStorage.getItem('phonenumber');
  let NIN = localStorage.getItem('NIN');
  let dob = localStorage.getItem('dob');
  let dateofregistration = localStorage.getItem('dateofregistration');
  let periodofstay = localStorage.getItem('periodofstay');
  let ward = localStorage.getItem('ward');
  let role = localStorage.getItem('role');

  // populate the table with the farmer data
  document.getElementById('firstname').textContent = firstname;
  document.getElementById('lastname').textContent = lastname;
  document.getElementById('phonenumber').textContent = phonenumber;
  document.getElementById('NIN').textContent = NIN;
  document.getElementById('dob').textContent = dob;
  document.getElementById('dateofregistration').textContent = dateofregistration;
  document.getElementById('periodofstay').textContent = periodofstay;
  document.getElementById('ward').textContent = ward;
  document.getElementById('role').textContent = role;

  // create a new row when new data is submitted
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', function () {
    const tableBody = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = 'New First Name';
    newRow.appendChild(cell1);
    const cell2 = document.createElement('td');
    cell2.textContent = 'New Last Name';
    newRow.appendChild(cell2);
    tableBody.appendChild(newRow);
  });
};


