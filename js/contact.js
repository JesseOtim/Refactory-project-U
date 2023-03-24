const validatemyForm = () => {
  const fullName = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phonenumber = document.getElementById("phonenumber");
  const message = document.getElementById("message");
  let error = 0;

  // fullname Validation
  let fullNameError = document.getElementById("fnameErr");
  let emailError = document.getElementById("emailErr");
  let phonenumberError = document.getElementById("phoneErr");
  let messageError = document.getElementById("messageErr");

  //
  if (fullName.value == "") {
    fullName.style.border = "2px solid red";
    fullNameError.innerHTML = "Please you must include your full name";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (fullName.value.length < 6) {
    fullName.style.border = "2px solid red";
    fullNameError.innerHTML = "Please your full name must be atleast 6 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (fullName.value.length > 25) {
    fullName.style.border = "2px solid red";
    fullNameError.innerHTML =
      "Please your full name must be less than 25 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    fullName.style.border = "2px solid darkgreen";
    fullNameError.innerHTML = "";
  }

  //Email validation
  const emailregex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Please the email must be filled";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (!email.value.match(emailregex)) {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Please put in a correct email address";
    emailError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    email.style.border = "2px solid darkgreen";
    emailError.innerHTML = "";
  }

  //phone number Validation
  const phonenumberregex =
    /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;

  if (phonenumber.value == "") {
    phonenumber.style.border = "2px solid red";
    phonenumberError.innerHTML = "Fill in your phone number";
    phonenumberError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (!phonenumber.value.match(phonenumberregex)) {
    phonenumber.style.border = "2px solid red";
    phonenumberError.innerHTML = "Phone number must be atleast 10 digits";
    phonenumberError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    phonenumber.style.border = "2px solid darkgreen";
    phonenumberError.innerHTML = "";
  }

  //Message Validation
  if (message.value == "") {
    message.style.border = "2px solid red";
    messageError.innerHTML = "Please include your message";
    messageError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (message.value.length < 4) {
    message.style.border = "2px solid red";
    messageError.innerHTML = "Message must be atleast 4 letters";
    messageError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    message.style.border = "2px solid darkgreen";
    messageError.innerHTML = "";
  }

  if (error > 0) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }
};
