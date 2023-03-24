const ValidateForm = () => {
  let error = 0;
  const email = document.getElementById("email");

  //
  let emailError = document.getElementById("emailErr");

  //email validation
  const emailregex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email is required";
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
    email.style.border = "2px solid green";
    emailError.textContent = "";
  }

  if (error > 0) {
    stopImmediatePropagation();
    preventDefault();
  }
};
