const Validateform = (event) => {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let phonenumber = document.getElementById("phonenumber");
  let NIN = document.getElementById("NIN");
  let dob = document.getElementById("dob");
  let dateofregistration = document.getElementById("dor");
  let periodofstay = document.getElementById("pos");

  //error
  let firstnameError = document.getElementById("firstnameErr");
  let lastnameError = document.getElementById("lastnameErr");
  let phonenumberError = document.getElementById("phonenumberError");
  let DateofBirth = document.getElementById("dobErr");
  let NINError = document.getElementById("NINErr");
  let dateofregistrationError = document.getElementById("dorErr");
  let periodofstayError = document.getElementById("posErr");
  let roleError = document.getElementById("RoleErr");

  //error

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

  //Role validation

  if (
    roleValue !== "Agricultral Officer " &&
    roleValue !== "Farmer One " &&
    roleValue !== "Urban Farmer "
  ) {
    role.style.border = "2px solid red";
    roleError.textContent = "Please select a valid role";
    roleError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    role.style.border = "2px solid darkgreen";
    roleError.innerHTML = "";
  }

  if (error > 0) {
    stopImmediatePropagation();
    preventDefault();
  }
};

var baseUrl = "http://localhost:4000/api/auth/";

document.getElementById('submitbutton').addEventListener('click', function (click) {
    addFarmer(click);
  });

async function addFarmer(event) {
  event.preventDefault();

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let phonenumber = document.getElementById("phonenumber").value;
  let NIN = document.getElementById("NIN").value;
  let dob = document.getElementById("dob").value;
  let dateofregistration = document.getElementById("dor").value;
  let periodofstay = document.getElementById("pos").value;

  try {
    const response = await fetch(baseUrl + "farmer/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        NIN: NIN,
        dob: dob,
        dateofregistration: dateofregistration,
        periodofstay: periodofstay,
        phonenumer: phonenumber,
      }),
    });
    const data = await response.json();
    // console.log(data, ">>>>>>>>>");
    if (data.status == 201) {
      // alert(data.message)
      setTimeout(function () {
        location.href = "/pages/Users.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}
