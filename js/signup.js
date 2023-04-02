const ValidateForm = (event) => {
  const firstname = document.getElementById("fn");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");

  let error = 0;
  //
  let firstnameError = document.getElementById("fnErr");
  let lastNameError = document.getElementById("lnameErr");
  let emailError = document.getElementById("emailErr");
  let passwordError = document.getElementById("passwordErr");
  let confirmPasswordError = document.getElementById("confirmpasswordError");
  //

  if (firstname.value == "") {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML = "Please the name cannot be empty";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (firstname.value.length < 5) {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML =
      "Please the First name must be at least 5 letters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (firstname.value.length > 50) {
    firstname.style.border = "2px solid red";
    firstnameError.innerHTML =
      "Please the first name must be less than 50 letters";
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
  } else if (lastName.value.length < 5) {
    lastName.style.border = "2px solid red";
    lastNameError.innerHTML = "Please the last name must be atleast 5 letters";
    lastNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else if (lastName.value.length > 50) {
    lastName.style.border = "2px solid red";
    lastNameError.innerHTML =
      "Please the last name must be less than 50 letters";
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

  // password validation
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

  // Confirm password

  if(confirmPassword.value == "") {
    confirmPassword.style.border = "2px solid red";
    confirmPasswordError.innerHTML = "Password can't be blank";
    confirmPasswordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }else if(confirmPassword.value !== password.value) {
    confirmPassword.style.border = "2px solid red";
    confirmPasswordError.textContent = "Passwords don't match";
    confirmPasswordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    confirmPassword.style.border = "2px solid darkgreen";
    confirmPasswordError.innerHTML = "";
  }

  if (error > 0) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }


};

var baseUrl = 'http://localhost:4000/api/auth';

document.getElementById('submitbutton').addEventListener('click', function(click) {
    newSignup(click);
});

async function newSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        console.log(email)
        const response = await fetch(baseUrl + '/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password,
            })
        })
        const data = await response.json()
        console.log(data,'>>>>>>>>>')
        if (data.status == 201) {
            // alert("successful sign up")
            setTimeout(myFunction(), 9000);
            window.location = 'clients.html'
        }

    } catch (error) {
        console.log(error)
    }

}
