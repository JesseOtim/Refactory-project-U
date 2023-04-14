// const ValidatemyForm = (event) => {
//   let error = 0;

//   const firstname = document.getElementById("firstname");
//   const lastname = document.getElementById("lastname");
//   const NIN = document.getElementById("NIN");
//   const phonenumber = document.getElementById("phonenumber");
//   const dob = document.getElementById("dob");

//   //Errors
//   const firstnameError = document.getElementById("firstnameErr");
//   const lastnameError = document.getElementById("lastnameErr");
//   const NINError = document.getElementById("NIN");
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


//   if (error > 0) {
//     event.stopImmediatePropagation();
//     event.preventDefault();
//   }

// };


function ValidatemyForm(event) {
  // prevent the form from submitting
  event.preventDefault();

  // get form fields by their ids
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const nin = document.getElementById("NIN");
  const phoneNumber = document.getElementById("phonenumber");
  const dob = document.getElementById("dob");
  const dor = document.getElementById("dor");

  // validate each field
  let isValid = true;
  if (firstName.value.trim() === "") {
    document.getElementById("firstnameErr").textContent = "First name is required";
    isValid = false;
  }
  if (lastName.value.trim() === "") {
    document.getElementById("lastnameErr").textContent = "Last name is required";
    isValid = false;
  }
  if (nin.value.trim() === "" || isNaN(nin.value)) {
    document.getElementById("NINErr").textContent = "NIN must be a number";
    isValid = false;
  }
  if (phoneNumber.value.trim() === "" || isNaN(phoneNumber.value)) {
    document.getElementById("phonenumberErr").textContent = "Phone number must be a number";
    isValid = false;
  }
  if (dob.value.trim() === "") {
    document.getElementById("dobErr").textContent = "Date of birth is required";
    isValid = false;
  }
  if (dor.value.trim() === "") {
    document.getElementById("dorErr").textContent = "Date of registration is required";
    isValid = false;
  }

  // return the validation result
  return isValid;
}
