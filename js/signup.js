const ValidateForm = (event) => {
  const firstname = document.getElementById("fn");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("conpassword");


  let error = 0;
  //
  let firstnameError = document.getElementById("fnErr");
  let lastNameError = document.getElementById("lnameErr");
  let emailError = document.getElementById("emailErr");
  let passwordError = document.getElementById("passwordErr");
  let confirmPasswordError = document.getElementById("conpasswordError");
  //

  if (firstname.value == "") {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML = "Please the name cannot be empty";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (firstname.value.length < 3) {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML =
      "Please the First name must be at least 3 letters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (firstname.value.length > 12) {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML =
      "Please the first name must be less than 11 letters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    firstname.style.border = "2px solid green";
    firstnameError.innerHTML = "";
  }
  // Last name

  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    lastNameError.innerHTML = "Please fill in the last name";
    lastNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (lastName.value.length < 3) {
    lastName.style.border = "2px solid red";
    lastNameError.innerHTML = "Please the last name must be atleast 3 letters";
    lastNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (lastName.value.length > 12) {
    lastName.style.border = "2px solid red";
    lastNameError.innerHTML =
      "Please the last name must be less than 12 letters";
    lastNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    lastName.style.border = "2px solid green";
    lastNameError.innerHTML = "";
  }

  //Email Address
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
  }else if (email.value.length < 20){
    email.style.border = "2px solid red";
    emailError.textContent = "Please put in a correct email address";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }else{
    email.style.border = "2px solid green";
    emailError.textContent = "";
  }

  //password validation
  const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if(password.value == ""){
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password can't be blank";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }else if(!password.value.match(passwordregex)){
    password.style.border = "2px solid red";
    passwordError.textContent = "Please put in the correct password";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }else{
    password.style.border = "2px solid darkgreen";
    passwordError.innerHTML = "";
  }

  // Confirm password
  const confirmPasswordregex =
    /^(?!.*\s)(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}(?<!password)$/;

    if(confirmPassword.value == ""){
      confirmPassword.style.border = "2px solid red";
      confirmPasswordError.innerHTML = "Password can't be blank";
      confirmPasswordError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false;
    }else if(!confirmPassword.value.match(confirmPasswordregex)){
      confirmPassword.style.border = "2px solid red"
      confirmPasswordError.textContent = "Please put in the correct password";
      confirmPasswordError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false;
    }else{
      confirmPassword.style.border = "2px solid darkgreen";
      confirmPasswordError.innerHTML = "";
    }


  if (error > 0) {
    event.stopImmediatePropagation();
    event.preventDefault();
  
  }

};

