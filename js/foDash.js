// const ValidatemyForm = (event) => {

//   event.preventDefault();
//   let error = 0;

//   const firstname = document.getElementById("firstname");
//   const lastname = document.getElementById("lastname");
//   const NIN = document.getElementById("NIN");
//   const phonenumber = document.getElementById("phonenumber");
//   const dob = document.getElementById("dob");

//   //Errors
//   const firstnameError = document.getElementById("firstnameErr");
//   const lastnameError = document.getElementById("lastnameErr");
//   const NINError = document.getElementById("NINErr");
//   const phonenumberError = document.getElementById("phonenumberError");
//   const dobError = document.getElementById("dobErr");

//   // First name
//   if (firstname.value == "") {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML = "Please the name cannot be empty";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (firstname.value.length < 5) {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML =
//       "Please the First name must be at least 5 letters";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (firstname.value.length > 50) {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML =
//       "Please the first name must be less than 50 letters";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else {
//     firstname.style.border = "2px solid green";
//     firstnameError.innerHTML = "";
//   }

//   //Last name

//   if (lastname.value == "") {
//     lastname.style.border = "2px solid red";
//     lastnameError.innerHTML = "Please the name cannot be empty";
//     lastnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (lastname.value.length < 5) {
//     lastname.style.border = "2px solid red";
//     lastnameError.innerHTML =
//       "Please the First name must be at least 5 letters";
//     lastnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (lastname.value.length > 50) {
//     lastname.style.border = "2px solid red";
//     lastnameError.innerHTML =
//       "Please the first name must be less than 50 letters";
//     lastnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else {
//     lastname.style.border = "2px solid green";
//     lastnameError.innerHTML = "";
//   }
// };


// function ValidatemyForm(event) {
//   // prevent the form from submitting
//   event.preventDefault();

//   // get form fields by their ids
//   const firstName = document.getElementById("firstname");
//   const lastName = document.getElementById("lastname");
//   const nin = document.getElementById("NIN");
//   const phoneNumber = document.getElementById("phonenumber");
//   const dob = document.getElementById("dob");
//   const dor = document.getElementById("dor");

//   // validate each field
//   let isValid = true;
//   if (firstName.value.trim() === "") {
//     document.getElementById("firstnameErr").textContent = "First name is required";
//     isValid = false;
//   }
//   if (lastName.value.trim() === "") {
//     document.getElementById("lastnameErr").textContent = "Last name is required";
//     isValid = false;
//   }
//   if (nin.value.trim() === "" || isNaN(nin.value)) {
//     document.getElementById("NINErr").textContent = "NIN must be a number";
//     isValid = false;
//   }
//   if (phoneNumber.value.trim() === "" || isNaN(phoneNumber.value)) {
//     document.getElementById("phonenumberErr").textContent = "Phone number must be a number";
//     isValid = false;
//   }
//   if (dob.value.trim() === "") {
//     document.getElementById("dobErr").textContent = "Date of birth is required";
//     isValid = false;
//   }
//   if (dor.value.trim() === "") {
//     document.getElementById("dorErr").textContent = "Date of registration is required";
//     isValid = false;
//   }

//   // return the validation result
//   return isValid;
// }


// const Validateform = (event) => {

//   event.preventDefault();
//   let firstname = document.getElementById("firstname");
//   let lastname = document.getElementById("lastname");
//   let phonenumber = document.getElementById("phonenumber");
//   let NIN = document.getElementById("NIN");
//   let dob = document.getElementById("dob");
//   let dateofregistration = document.getElementById("dor");
//   let periodofstay = document.getElementById("pos");

//   //error
//   let firstnameError = document.getElementById("firstnameErr");
//   let lastnameError = document.getElementById("lastnameErr");
//   let phonenumberError = document.getElementById("phonenumberError");
//   let DateofBirth = document.getElementById("dobErr");
//   let NINError = document.getElementById("NINErr");
//   let dateofregistrationError = document.getElementById("dorErr");
//   let periodofstayError = document.getElementById("posErr");
//   let roleError = document.getElementById("RoleErr");

//   //error

//   if (firstname.value == "") {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML = "First name can't be empty";
//     firstnameError.style =
//       "color:red;font-size:11px;font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (firstname.value.length < 3) {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML =
//       "Please the First name must be atleast 3 letters";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (firstname.value.length > 12) {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML =
//       "Please the firstname must be less than 12 letters";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else {
//     firstname.style.border = "2px solid darkgreen";
//     firstnameError.innerHTML = "";
//   }

//   // Last name
//   if (lastname.value == "") {
//     lastname.style.border = "2px solid red";
//     lastnameError.innerHTML = "Please fill in the last name";
//     lastnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (lastname.value.length < 3) {
//     lastname.style.border = "2px solid red";
//     lastnameError.innerHTML = "Please the last name must be atleast 3 letters";
//     lastnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else if (lastname.value.length > 12) {
//     lastname.style.border = "2px solid red";
//     lastnameError.innerHTML =
//       "Please the last name must be less than 12 letters";
//     lastnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else {
//     lastname.style.border = "2px solid green";
//     lastnameError.innerHTML = "";
//   }

//   //Role validation

//   if (
//     roleValue !== "Agricultral Officer " &&
//     roleValue !== "Farmer One " &&
//     roleValue !== "Urban Farmer "
//   ) {
//     role.style.border = "2px solid red";
//     roleError.textContent = "Please select a valid role";
//     roleError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
//     return false;
//   } else {
//     role.style.border = "2px solid darkgreen";
//     roleError.innerHTML = "";
//   }

//   // if (error > 0) {
//   //   event.stopImmediatePropagation();
 
//   // }
// };

var baseUrl = "http://localhost:4000/api/auth/";

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", addFarmer);

async function addFarmer(event) {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const NIN = document.getElementById("NIN").value;
  const phonenumber = document.getElementById("phonenumber").value;
  const DOB = document.getElementById("dob").value;
  const dateofregistration = document.getElementById("dor").value;
  const activities = document.getElementById("activities").value;
  const ward = document.getElementById("ward").value;
  const role = document.getElementById("role").value;

  try {
    const response = await fetch(baseUrl + "farmer/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        Phonenumber: phonenumber,
        NIN: NIN,
        DOB: DOB,
        dateofregistration: dateofregistration,
        activities: activities,
        ward: ward,
        role: role,
      }),
    });
    const data = await response.json();
    console.log(data, ">>>>>>>>>");
    if (data.status == 200) {
      populateTable();
      // Show the toast only when the form is submitted successfully
      var toastEl = document.getElementById("liveToast");
      //This bootstrap constructor shows or hides the toast
      var toast = new bootstrap.Toast(toastEl);
      toast.show();

      // alert(data.message)
      setTimeout(function () {
        location.href = "/pages/foDash.html";
      }, 300);
    }
  } catch (error) {
    console.log(error);
  }
}

// var submitBtn = document.getElementById("submitbutton");
// submitBtn.addEventListener("click", addFarmer);

//  document.getElementById("submitbutton");
// submitButton.addEventListener("click", getAllFarmers);

fetch("http://localhost:4000/api/auth/farmers/", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
  mode: "cors",
})
  .then((response) => response.json())
  .then((data) => {
    let tabledata = "";
    data.data.map((item) => {
      tabledata += `<tr>
          <td>${item?.firstname}</td>
          <td>${item?.lastname}</td>
          <td>${item?.Phonenumber}</td>
          <td>${item?.NIN}</td>
          <td>${item?.DOB}</td>
          <td>${item?.dateofregistration}</td>
          <td>${item?.activities}</td> 
          <td>${item?.ward}</td>
          <td>${item?.role}</td>
          <td><button type="button"  class="btn btn" data-bs-toggle="modal" data-bs-target="#exampleModal13">
          <i class="bi bi-trash-fill" style="color:red; outline:none; font-size:20px;" ></i>
        </button>
        </td>
        <td><button type="button" class="btn btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-pencil-square" style="color:darkgreen; font-size:20px;"></i>
    </button></td>
      
        </tr>`;
    });

    document.getElementById("table-body").innerHTML = tabledata;
  })
  .catch((error) => console.log(error));

const deleteButton = document.getElementById("deleteFarmers");
deleteButton.addEventListener("click", deletef);

async function deletef(event, id) {
  console.log("////////", id);
  event.preventDefault();
  try {
    const response = await fetch(
      `http://localhost:4000/api/auth/farmer/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

// Get a reference to the table
const table = document.getElementById("farmersTable");

// Add an event listener to the table
table.addEventListener("click", function (event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains("deleteBtn")) {
    // Get the row to be deleted
    const row = event.target.closest("tr");

    // Remove the row from the table
    row.remove();
  }
});