


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

  // clear the local storage after use
  // localStorage.clear();
}

// window.onload = function () {
//   let firstname = localStorage.getItem('firstname');
//   let lastname = localStorage.getItem('lastname');
//   let phonenumber = localStorage.getItem('phonenumber');
//   let NIN = localStorage.getItem('NIN');
//   let dob = localStorage.getItem('dob');
//   let dateofregistration = localStorage.getItem('dateofregistration');
//   let periodofstay = localStorage.getItem('periodofstay');
//   let ward = localStorage.getItem('ward');
//   let role = localStorage.getItem('role');

//   // populate the table with the farmer data
//   document.getElementById('firstname').textContent = firstname;
//   document.getElementById('lastname').textContent = lastname;
//   document.getElementById('phonenumber').textContent = phonenumber;
//   document.getElementById('NIN').textContent = NIN;
//   document.getElementById('dob').textContent = dob;
//   document.getElementById('dateofregistration').textContent = dateofregistration;
//   document.getElementById('periodofstay').textContent = periodofstay;
//   document.getElementById('ward').textContent = ward;
//   document.getElementById('role').textContent = role;

//   // create a new row for the new farmer data
//   let newFirstname = localStorage.getItem('new-firstname');
//   let newLastname = localStorage.getItem('new-lastname');
//   let newPhonenumber = localStorage.getItem('new-phonenumber');
//   let newNIN = localStorage.getItem('new-NIN');
//   let newDOB = localStorage.getItem('new-dob');
//   let newDateofregistration = localStorage.getItem('new-dateofregistration');
//   let newPeriodofstay = localStorage.getItem('new-periodofstay');
//   let newWard = localStorage.getItem('new-ward');
//   let newRole = localStorage.getItem('new-role');

//   let newFarmerRow = document.getElementById('new-farmer-row');
//   let newFirstnameCell = document.createElement('td');
//   let newLastnameCell = document.createElement('td');
//   let newPhonenumberCell = document.createElement('td');
//   let newNINCell = document.createElement('td');
//   let newDOBCell = document.createElement('td');
//   let newDateofregistrationCell = document.createElement('td');
//   let newPeriodofstayCell = document.createElement('td');
//   let newWardCell = document.createElement('td');
//   let newRoleCell = document.createElement('new-role');
// }

// window.onload = function () {
//   let firstname = localStorage.getItem('firstname');
//   let lastname = localStorage.getItem('lastname');
//   let phonenumber = localStorage.getItem('phonenumber');
//   let NIN = localStorage.getItem('NIN');
//   let dob = localStorage.getItem('dob');
//   let dateofregistration = localStorage.getItem('dateofregistration');
//   let periodofstay = localStorage.getItem('periodofstay');
//   let ward = localStorage.getItem('ward');
//   let role = localStorage.getItem('role');

//   // populate the table with the farmer data
//   document.getElementById('firstname').textContent = firstname;
//   document.getElementById('lastname').textContent = lastname;
//   document.getElementById('phonenumber').textContent = phonenumber;
//   document.getElementById('NIN').textContent = NIN;
//   document.getElementById('dob').textContent = dob;
//   document.getElementById('dateofregistration').textContent = dateofregistration;
//   document.getElementById('periodofstay').textContent = periodofstay;
//   document.getElementById('ward').textContent = ward;
//   document.getElementById('role').textContent = role;

//   // create a new row for the new farmer data
//   let newFirstname = localStorage.getItem('new-firstname');
//   let newLastname = localStorage.getItem('new-lastname');
//   let newPhonenumber = localStorage.getItem('new-phonenumber');
//   let newNIN = localStorage.getItem('new-NIN');
//   let newDOB = localStorage.getItem('new-dob');
//   let newDateofregistration = localStorage.getItem('new-dateofregistration');
//   let newPeriodofstay = localStorage.getItem('new-periodofstay');
//   let newWard = localStorage.getItem('new-ward');
//   let newRole = localStorage.getItem('new-role');

//   let newFarmerRow = document.createElement('tr');
//   let newFirstnameCell = document.createElement('td');
//   newFirstnameCell.textContent = newFirstname;
//   let newLastnameCell = document.createElement('td');
//   newLastnameCell.textContent = newLastname;
//   let newPhonenumberCell = document.createElement('td');
//   newPhonenumberCell.textContent = newPhonenumber;
//   let newNINCell = document.createElement('td');
//   newNINCell.textContent = newNIN;
//   let newDOBCell = document.createElement('td');
//   newDOBCell.textContent = newDOB;
//   let newDateofregistrationCell = document.createElement('td');
//   newDateofregistrationCell.textContent = newDateofregistration;
//   let newPeriodofstayCell = document.createElement('td');
//   newPeriodofstayCell.textContent = newPeriodofstay;
//   let newWardCell = document.createElement('td');
//   newWardCell.textContent = newWard;
//   let newRoleCell = document.createElement('td');
//   newRoleCell.textContent = newRole;

//   newFarmerRow.appendChild(newFirstnameCell);
//   newFarmerRow.appendChild(newLastnameCell);
//   newFarmerRow.appendChild(newPhonenumberCell);
//   newFarmerRow.appendChild(newNINCell);
//   newFarmerRow.appendChild(newDOBCell);
//   newFarmerRow.appendChild(newDateofregistrationCell);
//   newFarmerRow.appendChild(newPeriodofstayCell);
//   newFarmerRow.appendChild(newWardCell);
//   newFarmerRow.appendChild(newRoleCell);
// }

