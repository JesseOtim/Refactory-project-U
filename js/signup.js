var baseUrl = "http://localhost:3001/api/auth/";

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", newSignup);

async function newSignup(event) {
  event.preventDefault();
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    console.log(email);
    const response = await fetch(baseUrl + "signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data, ">>>>>>>>>");
    if (data.status == 201) {
      // Show the toast only when the form is submitted successfully
      var toastEl = document.getElementById("liveToast");
      //This bootstrap constructor shows or hides the toast
      var toast = new bootstrap.Toast(toastEl);
      toast.show();
      // alert(data.message)
      setTimeout(function () {
        location.href = "/auth/login.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}

var submitBtn = document.getElementById("submitbutton");
submitBtn.addEventListener("click", newSignup);
