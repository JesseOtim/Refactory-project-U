// const form = document.getElementById("myForm");

// const form = document.getElementById('registerform');
// form.addEventListener('submit', function(e) {
//     let validForm =
//         userN()
//         if(!validForm){
//             e.preventDefault();
//         }

// });

// const Vform = () => {
//   const userN = document.getElementById('inputName4')
//   const userError = document.getElementById('userError')
// // regex
// const userRegex = /[A-Z][a-z]*( [A-Z][a-z]*)*/; // for name capital and small letters

// if(userN.value != "" && userN.value.match(userRegex)){
//     userN.style.border = "1px solid green"
//     userError.textContent = ""
// }else{
//     userN.style.border = "1px solid red"
//     userError.textContent = "Name must start with capital letter"
//     userError.style = "color: red"
//     return false
// };

//   if (firstName.value === "" ) {
//     firstName.style.border = "1px solid red";
//     firstError.textContent = "enter your name";

//   } else {
//     firstName.style.border = "1px solid green";
//     firstError.textContent = "";
//   }
// };

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
