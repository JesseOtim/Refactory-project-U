// api url
// const baseUrl =
// "http://localhost:4000/api/auth/";

// // Defining async function
// async function getapi(url) {

// 	// Storing response
// 	const response = await fetch(baseUrl + "farmers/");

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(baseUrl);

// Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }

// async function populateTable() {
//   try {
//     const response = await fetch("http://localhost:4000/api/auth/farmers/", {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//       },
//       mode: "cors",
//     });
//     const data = await response.json();
//     let tabledata = ''
//     data.data.map((item) => {
//       tabledata+=`<tr>
//       <td>${item.firstname}</td>
//       </tr>`

//     });

//     document.getElementById('table-body').innerHTML=tabledata
//   } catch (error) {
//     console.log(error);
//   }
// }


  // fetch("http://localhost:4000/api/auth/farmers/", {
  //   method: "GET",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   mode: "cors",
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     let tabledata = ''
  //     data.data.map((item) => {
  //       tabledata += `<tr>
  //         <td>${item.firstname}</td>
  //       </tr>`
  //     });

  //     document.getElementById('table-body').innerHTML = tabledata;
  //   })
  //   .catch(error => console.log(error));



