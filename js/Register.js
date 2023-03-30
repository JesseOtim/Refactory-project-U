const ValidatemyForm = () => {
  'use strict'
  let error = 0;
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const uniqueid = document.getElementById("uniqueid");
  const female = document.getElementById("female");
  const male = document.getElementById("male");


  //
  let firstnameError = document.getElementById("fnameErr");
  let lastnameError = document.getElementById("lastnameErr");
  let emailError = document.getElementById("emailErr");
  let passwordError = document.getElementById("passwordErr");
  let uniqueError = document.getElementById("uniqueErr");
  let genderError = document.getElementById("genderErr");

  if (firstname.value == "") {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML = "First name can't be empty";
    firstnameError.style =
      "color:red;font-size:11px;font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (firstname.value.length < 3) {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML =
      "Please the First name must be atleast 3 letters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (firstname.value.length > 12) {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML =
      "Please the firstname must be less than 12 letters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    firstname.style.border = "2px solid darkgreen";
    firstnameError.innerHTML = "";
  }

  // Last name
  if (lastname.value == "") {
    lastname.style.border = "2px solid red";
    lastnameError.innerHTML = "Please fill in the last name";
    lastnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (lastname.value.length < 3) {
    lastname.style.border = "2px solid red";
    lastnameError.innerHTML = "Please the last name must be atleast 3 letters";
    lastnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (lastname.value.length > 12) {
    lastname.style.border = "2px solid red";
    lastnameError.innerHTML =
      "Please the last name must be less than 12 letters";
    lastnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    lastname.style.border = "2px solid green";
    lastnameError.innerHTML = "";
  }

  //Email validation
  const emailregex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.textContent = "Email is required";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (!email.value.match(emailregex)) {
    email.style.border = "2px solid red";
    emailError.textContent = "Please put in a correct email address";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (email.value.length < 20) {
    email.style.border = "2px solid red";
    emailError.textContent = "Please put in a correct email address";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    email.style.border = "2px solid green";
    emailError.textContent = "";
  }

  //password validation
  const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password can't be blank";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (!password.value.match(passwordregex)) {
    password.style.border = "2px solid red";
    passwordError.textContent = "Please put in the correct password";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    password.style.border = "2px solid darkgreen";
    passwordError.innerHTML = "";
  }

  // unique number validations
  const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/;
  if (uniqueid.value == "") {
    uniqueid.style.border = "1px solid red";
    uniqueError.innerHTML = "Unique number is required";
    uniqueError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (
    !(
      uniqueid.value.match(unregex) ||
      uniqueid.value.match(ufregex) ||
      uniqueid.value.match(foregex)
    )
  ) {
    uniqueid.style.border = "1px solid red";
    uniqueError.innerHTML = "Unique number must follow this formart AO-000";
    uniqueError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    uniqueid.style.border = "1px solid green";
    uniqueError.textContent = "";
  }

  // gender validations
  // if (female.checked == false && male.checked==false) {
  // female.addEventListener("change", function() {
  //   if (female.checked) {
  //     male.checked = false;
  //   }else {
  //     genderError.textcontent="";
  //   }
  // });

  // male.addEventListener("change", function() {
  //   if (male.checked) {
  //     female.checked = false;
  //   }else{
  //     genderError.textcontent="";
  //   }
  // });

  if (!(female.checked || male.checked)) {
    genderError.textContent = "Please select gender";
    genderError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    genderError.textContent = "";
  }

  if (error > 0) {
    stopImmediatePropagation();
    preventDefault();
  }
};
