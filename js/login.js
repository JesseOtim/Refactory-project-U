// const ValidatemyForm = (event) => {
//   event.preventDefault();
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");

//   //errors
//   let emailError = document.getElementById("emailErr");
//   let passwordError = document.getElementById("passwordErr");
//   let generalError = document.getElementById("generalErr");

//   //email validation
//   const emailregex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   email.addEventListener('input', ()=> {
//   if (email.value == "") {
//     email.style.border = "2px solid red";
//     emailError.innerHTML = "Please the email must be filled";
//     emailError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    

//   } else if (!email.value.match(emailregex)) {
//     email.style.border = "2px solid red";
//     emailError.innerHTML = "Please put in a correct email address";
//     emailError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    

//   } else {
//     email.style.border = "2px solid darkgreen";
//     emailError.textContent = "";
//   }
// });

//   //password validation
//   const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//   if (password.value == "") {
//     password.style.border = "2px solid red";
//     passwordError.innerHTML = "Password can't be blank";
//     passwordError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    

//   } else if (!password.value.match(passwordregex)) {
//     password.style.border = "2px solid red";
//     passwordError.innerHTML =
//       "Your password should include atleast one Uppercase and lowercase letter, a number";
//     passwordError.style =
//       "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    


//   } else {
//     password.style.border = "2px solid darkgreen";
//     passwordError.innerHTML = "";
//   }

//  // check for general errors
//  if (emailError.innerHTML !== "" || passwordError.innerHTML !== "") {
//   generalError.innerHTML = "";
//   generalError.style =
//     "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     error++

// } else {
//   generalError.innerHTML = "";
// }

//   // if (error > 0) {
//   //   event.stopImmediatePropagation();
    
//   // }
// };

var baseUrl = "http://localhost:4000/api/auth/";

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", newLogin);

async function newLogin(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    console.log(email);
    const response = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.status == 200) {
      console.log(data.data.role, ">>>>>>>>>");
      // Show the toast only when the form is submitted successfully
      var toastEl = document.getElementById("liveToast");
      //This bootstrap constructor shows or hides the toast
      var toast = new bootstrap.Toast(toastEl);
      toast.show();
      // alert(data.message)
      setTimeout(function () {
        if (data.data.role === 'agricOfficer'){
          location.href = "/pages/aoDash.html";
        }
        if (data.data.role === 'farmerOne'){
          location.href = "/pages/foDash.html";
        }
        if (data.data.role === 'urbanFarmer'){
          location.href = "/pages/ufDash.html";
        }
        if (data.data.role === 'user') {
          location.href = "/pages/Products.html";
        }
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}

// var submitBtn = document.getElementById("submitbutton");
// submitBtn.addEventListener("click",);
