const Vform = () => {
  const userN = document.getElementById("inputName4");
  const userError = document.getElementById("userError");

  const phonenumber = document.getElementById("inputPhonenumber4");
  const phonenumberError = document.getElementById("phonenumberError");

  const ninnumber = document.getElementById("inputninNumber");
  const ninnumberError = document.getElementById("ninnumberError");

  // regex
  const userRegex = /[A-Z][a-z]*( [A-Z][a-z]*)*/; // for name capital and small letters
  const ninRegex = /^[A-Z]{2}[0-9A-Z]{12}$/; // for NIN exactly 14 alphanumric characters
  const phoneRegex = /^\d{10}$/; // for phone number

  if (userN.value != "" && userN.value.match(userRegex)) {
    userN.style.border = "1px solid green";
    userError.textContent = "";
  } else {
    userN.style.border = "1px solid red";
    userError.textContent = "Name must start with capital letter";
    userError.style = "color: red";
    return false;
  }

  if (phonenumber.value != "" && phonenumber.value.match(phoneRegex)) {
    phonenumber.style.border = "1px solid green";
    phonenumberError.textContent = "";
  } else {
    phonenumber.style.border = "1px solid red";
    phonenumberError.textContent = "Name must start with capital letter";
    phonenumberError.style = "color: red";
    return false;
  }

  if (ninnumber.value != "" && ninnumber.value.match(ninRegex)) {
    ninnumber.style.border = "1px solid green";
    ninnumberError.textContent = "";
  } else {
    ninnumber.style.border = "1px solid red";
    ninnumberError.textContent = "Name must start with capital letter";
    ninnumberError.style = "color: red";
    return false;
  }
  console.log(ninnumber)
  
};
