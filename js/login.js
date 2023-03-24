const ValidatemyForm = (event) => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let error = 0;

  //
  let emailError = document.getElementById("mailErr");
  let passwordError = document.getElementById("passwordErr");

  //email validation
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
    emailError.textContent = "";
  }

  //password validation
  const passwordregex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d){8,20}$/;

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password can't be blank";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (!password.value.match(passwordregex)) {
    password.style.border = "2px solid red";
    passwordError.innerHTML =
      "Your password should include atleast one Uppercase and lowercase letter, a number";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;

    return false;
  } else {
    password.style.border = "2px solid darkgreen";
    passwordError.innerHTML = "";
  }

  if (error > 0) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
};
