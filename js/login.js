
var baseUrl = "http://localhost:3000/api/auth/";

const submitButton = document.getElementById ("submitbutton");
submitButton.addEventListener("click", newLogin);

async function newLogin(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    console.log(email);
    const response = await fetch (baseUrl + "login", {
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
