const Validateform = (event) => {
  event.preventDefault();
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const NIN = document.getElementById("NIN");
  const phonenumber = document.getElementById("phonenumber");
  const DateofBirth = document.getElementById("dob");
  const dateofregistration = document.getElementById("dor");
  const periodofstay = document.getElementById("pos");
  const residencetype = document.getElementById("residencetype");
  const ward = document.getElementById("ward");
  const role = document.getElementById("role");
  const dobRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

  //error
  const firstnameError = document.getElementById("firstnameErr");
  const lastnameError = document.getElementById("lastnameErr");
  const NINError = document.getElementById("NINErr");
  const phonenumberError = document.getElementById("phonenumberErr");
  const DateofBirthError = document.getElementById("dobErr");
  const dateofregistrationError = document.getElementById("dorErr");
  const periodofstayError = document.getElementById("posErr");
  const residencetypeError = document.getElementById("residencetypeErr");
  const wardError = document.getElementById("wardErr");
  const roleError = document.getElementById("roleErr");

  if (firstname.value == "") {
    firstname.style.border = "3px solid red";
    firstnameError.textContent = "First name can't be empty";
    firstnameError.style =
      "color:red;font-size:11px;font-family:Arial, Helvetica, sans-serif;";
  } else if (firstname.value.length < 3) {
    firstname.style.border = "3px solid red";
    firstnameError.textContent =
      "Please the First name must be atleast 3 constters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else if (firstname.value.length > 13) {
    firstname.style.border = "3px solid red";
    firstnameError.textContent =
      "Please the firstname must be less than 13 constters";
    firstnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else {
    firstname.style.border = "3px solid darkgreen";
    firstnameError.textContent = "";
  }

  // Last name
  if (lastname.value == "") {
    lastname.style.border = "3px solid red";
    lastnameError.textContent = "Please fill in the last name";
    lastnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else if (lastname.value.length < 3) {
    lastname.style.border = "3px solid red";
    lastnameError.textContent = "Please the last name must be atleast 3 constters";
    lastnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else if (lastname.value.length > 13) {
    lastname.style.border = "3px solid red";
    lastnameError.textContent =
      "Please the last name must be less than 13 constters";
    lastnameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else {
    lastname.style.border = "3px solid green";
    lastnameError.textContent = "";
  }

  // NIN Validations
  const NINRegex = /^[A-Z]\d{9}[A-Z]\d{2}$/;

  if (NIN.value == "") {
    NIN.style.border = "3px solid red";
    NINError.textContent = "Please fill in your NIN";
    NINError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else if (!NIN.value.match(NINRegex)) {
    NIN.style.border = "3px solid red";
    NINError.textContent = "Please put in the correct NIN ";
    NINError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else {
    NIN.style.border = "3px solid green";
    NINError.textContent = "";
  }

  // Phone Validations
  const phoneregex = /^\(\d{3}\) \d{3}\-\d{4}$/;
  if (phonenumber.value == "") {
    phonenumber.style.border = "3px solid red";
    phonenumberError.textContent = "Please fill in the last name";
    phonenumberError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else if (!phonenumber.value.match(phoneregex)) {
    phonenumber.style.border = "3px solid red";
    phonenumberError.textContent = "Please put in the correct phonenumber";
    phonenumberError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else {
    phonenumber.style.border = "3px solid green";
    phonenumberError.textContent = "";
  }

  // Dateof Birth
 
  if (DateofBirth.value == "") {
    DateofBirth.style.border = "3px solid red";
    DateofBirthError.textContent = "Please enter your date of birth";
  } else if (!DateofBirth.value.match(dobRegex)) {
    DateofBirth.style.border = "3px solid red";
    DateofBirthError.textContent = "Please put in your correct Date of birth";
    DateofBirthError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else {
    DateofBirth.style.border = "3px solid green";
    DateofBirthError.textContent = "";
  }

  // Date of Registration Validations
  const dorRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  if (dateofregistration.value == "") {
    dateofregistration.style.border = "3px solid red";
    dateofregistrationError.textContent =
      "Please enter your date of registration";
  } else if (!dateofregistration.value.match(dorRegex)) {
    dateofregistration.style.border = "3px solid red";
    dateofregistrationError.textContent =
      "Please put in your correct date of registration";
    dateofregistrationError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else {
    dateofregistration.style.border = "3px solid green";
    dateofregistrationError.textContent = "";
  }

  // Period of Stay Validations
  if (periodofstay.value == "") {
    periodofstay.style.border = "3px solid red";
    periodofstayError.textContent = "Please enter your period of stay";
  } else {
    periodofstay.style.border = "3px solid green";
    periodofstayError.textContent = "";
  }
  //Residence Type
  if (residencetype.value == "") {
    residencetype.style.border = "3px solid red";
    residencetypeError.textContent = "Please select your residence type";
  } else if (
    residencetype.value !== "Temporary " &&
    residencetype.value !== "Permanent"
  ) {
    residencetype.style.border = "3px solid red";
    residencetypeError.textContent = "Please select your residence type";
  } else {
    residencetype.style.border = "3px solid green";
    residencetypeError.textContent = "";
  }

  //ward validation
  if (ward.value == "") {
    ward.style.border = "3px solid red";
    d.textContent = "Please select your ward";
  } else if (
    ward.value != "1" &&
    ward.value != "2" &&
    ward.value != "3" &&
    ward.value != "4"
  ) {
    ward.style.border = "3px solid red";
    wardError.textContent = "Please select your residence type";
  } else {
    ward.style.border = "3px solid green";
    ward.textContent = "";
  }

  // Role Validations
  if (role.value == "") {
    role.style.border = "3px solid red";
    roleError.textContent = "Please select a role";
    roleError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  } else if(role.value != "Agricultural officer" &&
    role.value != "Farmer One" &&
    role.value != "Urban Farmer"){
    role.style.border = "3px solid red";
    roleError.textContent = "Please select a valid role";
    
  } else {
    role.style.border = "3px solid green";
    roleError.textContent = "";
  }
  
};



// if (error > 0) {
//   event.stopImmediatePropagation();

// }

var baseUrl = "http://localhost:4000/api/auth/";

// 'https://project-u-backend.herokuapp.com/api/auth/'
// document.getElementById('submitbutton').addEventListener('click', function (click) {
//     addFarmer(click);
//   });

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", Validateform);

async function addFarmer(event) {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const phonenumber = document.getElementById("phonenumber").value;
  const NIN = document.getElementById("NIN").value;
  const dob = document.getElementById("dob").value;
  const dateofregistration = document.getElementById("dor").value;
  const periodofstay = document.getElementById("pos").value;
  const ward = document.getElementById("ward").value;
  const role = document.getElementById("role").value;

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
        DOB: dob,
        dateofregistration: dateofregistration,
        periodofstay: periodofstay,
        Phonenumber: phonenumber,
        ward: ward,
        role: role,
      }),
    });
    const data = await response.json();
    // console.log(data, ">>>>>>>>>");
    if (data.status == 301) {
         // Show the toast only when the form is submitted successfully
         var toastEl = document.getElementById("liveToast");
         //This bootstrap constructor shows or hides the toast
         var toast = new bootstrap.Toast(toastEl);
         toast.show();

      // alert(data.message)
      setTimeout(function () {
        // store the farmer data in local storage
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("phonenumber", phonenumber);
        localStorage.setItem("NIN", NIN);
        localStorage.setItem("dob", dob);
        localStorage.setItem("dateofregistration", dateofregistration);
        localStorage.setItem("periodofstay", periodofstay);
        localStorage.setItem("ward", ward);
        localStorage.setItem("role", role);

        location.href = "/pages/Users.html";
      }, 300);
    }
  } catch (error) {
    console.log(error);
  }
}


var submitBtn = document.getElementById("submitbutton");
submitBtn.addEventListener("click", addFarmer);
