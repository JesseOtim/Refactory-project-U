// // Define the base URL for the API
// const baseUrl = "http://localhost:4000/api/auth/";

// // Retrieve the UserList element from the HTML page
// const userList = document.getElementById("UserList");

// // Make a GET request to the server to retrieve the list of farmers
// fetch(baseUrl + "farmers/")
//   .then(response => {
//     // Check if the response is successful
//     if (response.ok) {
//       // Parse the response as JSON
//       return response.json();
//     } else {
//       throw new Error("Error retrieving data from server.");
//     }
//   })
//   .then(data => {
//     // Loop through the list of farmers and create a new row in the table for each farmer
//     for (let farmer of data) {
//       // Create a new row element
//       const row = document.createElement("tr");

//       // Add the farmer's data to the row
//       row.innerHTML = `
//         <td>${farmer.firstname} ${farmer.lastname}</td>
//         <td>${farmer.phonenumber}</td>
//         <td>${farmer.NIN}</td>
//         <td>${farmer.dob}</td>
//         <td>${farmer.dateofregistration}</td>
//         <td>${farmer.periodofstay}</td>
//         <td>${farmer.ward}</td>
//         <td>${farmer.role}</td>
//       `;

//       // Add the row to the UserList table
//       userList.appendChild(row);
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   });



 
const tableBody = document.getElementById('table-body');
  const data = [];
  
tableBody.innerHTML = ''; // Clear any existing rows
data.forEach(farmer => {
  const row = document.createElement('tr');

  const firstnameCell = document.createElement('td');
  firstnameCell.textContent = farmer.firstname;
  row.appendChild(firstnameCell);

  const lastnameCell = document.createElement('td');
  lastnameCell.textContent = farmer.lastname;
  row.appendChild(lastnameCell);

  const phoneNumberCell = document.createElement('td');
  phoneNumberCell.textContent = farmer.phonenumber;
  row.appendChild(phoneNumberCell);

  const NINCell = document.createElement('td');
  NINCell.textContent = farmer.NIN;
  row.appendChild(NINCell);

  const dobCell = document.createElement('td');
  dobCell.textContent = farmer.dob;
  row.appendChild(dobCell);

  const dorCell = document.createElement('td');
  dorCell.textContent = farmer.dateofregistration;
  row.appendChild(dorCell);

  const posCell = document.createElement('td');
  posCell.textContent = farmer.periodofstay;
  row.appendChild(posCell);

  const wardCell = document.createElement('td');
  wardCell.textContent = farmer.ward;
  row.appendChild(wardCell);

  const roleCell = document.createElement('td');
  roleCell.textContent = farmer.role;
  row.appendChild(roleCell);

  tableBody.appendChild(row);
});


// const tableBody = document.getElementById('table-body');
// const data = [];

// // Get form element and add submit event listener
// const form = document.getElementById('my-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // prevent default form submission behavior

//   // Get values from form inputs
//   const firstname = document.getElementById('firstname').value;
//   const lastname = document.getElementById('lastname').value;
//   const phonenumber = document.getElementById('phonenumber').value;
//   const NIN = document.getElementById('NIN').value;
//   const dob = document.getElementById('dob').value;
//   const dateofregistration = document.getElementById('dateofregistration').value;
//   const periodofstay = document.getElementById('periodofstay').value;
//   const ward = document.getElementById('ward').value;
//   const role = document.getElementById('role').value;

//   // Create new object with form values
//   const newFarmer = {
//     firstname,
//     lastname,
//     phonenumber,
//     NIN,
//     dob,
//     dateofregistration,
//     periodofstay,
//     ward,
//     role
//   };

//   // Add new object to data array
//   data.push(newFarmer);

//   // Render updated data in user list
//   renderUserList();
// });

// function renderUserList() {
//   tableBody.innerHTML = ''; // Clear any existing rows
//   data.forEach(farmer => {
//     const row = document.createElement('tr');

//     const firstnameCell = document.createElement('td');
//     firstnameCell.textContent = farmer.firstname;
//     row.appendChild(firstnameCell);

//     const lastnameCell = document.createElement('td');
//     lastnameCell.textContent = farmer.lastname;
//     row.appendChild(lastnameCell);

//     const phoneNumberCell = document.createElement('td');
//     phoneNumberCell.textContent = farmer.phonenumber;
//     row.appendChild(phoneNumberCell);

//     const NINCell = document.createElement('td');
//     NINCell.textContent = farmer.NIN;
//     row.appendChild(NINCell);

//     const dobCell = document.createElement('td');
//     dobCell.textContent = farmer.dob;
//     row.appendChild(dobCell);

//     const dorCell = document.createElement('td');
//     dorCell.textContent = farmer.dateofregistration;
//     row.appendChild(dorCell);

//     const posCell = document.createElement('td');
//     posCell.textContent = farmer.periodofstay;
//     row.appendChild(posCell);

//     const wardCell = document.createElement('td');
//     wardCell.textContent = farmer.ward;
//     row.appendChild(wardCell);

//     const roleCell = document.createElement('td');
//     roleCell.textContent = farmer.role;
//     row.appendChild(roleCell);

//     tableBody.appendChild(row);
//   });
// }


