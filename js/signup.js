// const ValidateForm = (event) => {

//   event.preventDefault();
//   const firstname = document.getElementById("firstname");
//   const lastName = document.getElementById("lastname");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const confirmPassword = document.getElementById("confirmpassword");

//   let error = 0;
//   //
//   let firstnameError = document.getElementById("firstnameErr");
//   let lastNameError = document.getElementById("lastnameErr");
//   let emailError = document.getElementById("emailErr");
//   let passwordError = document.getElementById("passwordErr");
//   let confirmPasswordError = document.getElementById("confirmpasswordErr");

//   // Add eventListeners
//   firstname.addEventListener('input', function() {
//     firstname.style.border = "2px solid green";
//   });
  
//   lastName.addEventListener('input', function() {
//     lastName.style.border = "2px solid green";
//   });
  
//   email.addEventListener('input', function() {
//     email.style.border = "2px solid green";
//   });
  
  

//   // First name Validation

//   if (firstname.value == "") {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML = "Please the name cannot be empty";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (firstname.value.length < 5) {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML =
//       "Please the First name must be at least 5 letters";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (firstname.value.length > 50) {
//     firstname.style.border = "2px solid red";
//     firstnameError.innerHTML =
//       "Please the first name must be less than 50 letters";
//     firstnameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else {
//     firstname.style.border = "2px solid green";
//     firstnameError.innerHTML = "";
//   };

//   // Last name Validation
//   if (lastName.value == "") {
//     lastName.style.border = "2px solid red";
//     lastNameError.innerHTML = "Please fill in the last name";
//     lastNameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (lastName.value.length < 5) {
//     lastName.style.border = "2px solid red";
//     lastNameError.innerHTML = "Please the last name must be atleast 5 letters";
//     lastNameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (lastName.value.length > 50) {
//     lastName.style.border = "2px solid red";
//     lastNameError.innerHTML =
//       "Please the last name must be less than 50 letters";
//     lastNameError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else {
//     lastName.style.border = "2px solid green";
//     lastNameError.innerHTML = "";
//   };

//   //Email Address Validation
//   const emailregex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (email.value == "") {
//     email.style.border = "2px solid red";
//     emailError.textContent = "Email is required";
//     emailError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (!email.value.match(emailregex)) {
//     email.style.border = "2px solid red";
//     emailError.textContent = "Please put in a correct email address";
//     emailError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (email.value.length < 20) {
//     email.style.border = "2px solid red";
//     emailError.textContent = "Please put in a correct email address";
//     emailError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else {
//     email.style.border = "2px solid green";
//     emailError.textContent = "";
//   };

//   // password validation
//   const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//   if (password.value == "") {
//     password.style.border = "2px solid red";
//     passwordError.innerHTML = "Password can't be blank";
//     passwordError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else if (!password.value.match(passwordregex)) {
//     password.style.border = "2px solid red";
//     passwordError.textContent = "Please put in the correct password";
//     passwordError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else {
//     password.style.border = "2px solid darkgreen";
//     passwordError.innerHTML = "";
//   }

//   // Confirm password

//   if(confirmPassword.value == "") {
//     confirmPassword.style.border = "2px solid red";
//     confirmPasswordError.innerHTML = "Password can't be blank";
//     confirmPasswordError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   }else if(confirmPassword.value !== password.value) {
//     confirmPassword.style.border = "2px solid red";
//     confirmPasswordError.textContent = "Passwords don't match";
//     confirmPasswordError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++;
    
//   } else {
//     confirmPassword.style.border = "2px solid darkgreen";
//     confirmPasswordError.innerHTML = "";
//   }


// };

var baseUrl = "http://localhost:4000/api/auth/";

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", newSignup);

async function newSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        console.log(email)
        const response = await fetch(baseUrl + 'signup', {
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
            // Show the toast only when the form is submitted successfully
            var toastEl = document.getElementById("liveToast");
            //This bootstrap constructor shows or hides the toast
            var toast = new bootstrap.Toast(toastEl);
            toast.show();
            // alert(data.message)
            setTimeout(function(){location.href="/auth/login.html"} , 500);  
        }

    } catch (error) {
        console.log(error)
    }

};

var submitBtn = document.getElementById("submitbutton");
submitBtn.addEventListener("click", newSignup);


