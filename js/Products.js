// var baseUrl = 'http://localhost:4000/api/auth/';

// document.getElementById('submitbutton').addEventListener('click', function(click) {
//     addProduct(click);
// });

// async function addProduct(event) {
//     event.preventDefault();
//     let name= document.getElementById('name').value;
//     let price = document.getElementById('price').value;
//     let image = document.getElementById('uploadimage').value;
//     let category = document.getElementById('category').value;
//     let quantity= document.getElementById('quantity').value;

//     try {

//         const response = await fetch(baseUrl + 'products/', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             mode: 'cors',
//             body: JSON.stringify({
//                 "name": name,
//                 "price": price,
//                 "image": image,
//                 "category": category,
//                 "quantity": quantity,
//             })
//         })
//         const data = await response.json()
//         console.log(data,'>>>>>>>>>')
//         if (data.status == 201) {
//             alert(data.message)
//             //close modal
//             setTimeout(function(){location.href="/Auth/Products.html"} , 200);
//         }

//     } catch (error) {
//         console.log(error)
//     }

// }

// const form = document.getElementById('register-form');
// const uploadInput = document.getElementById('uploadimage');

// uploadInput.addEventListener('change', async () => {
//   const file = uploadInput.files[0];

//   // Upload the file to Cloudinary
//   const { secure_url } = await cloudinary.uploader.upload(file);

//   // Set the image URL in a hidden input field so it's included in the form data
//   const imageUrlInput = document.createElement('input');
//   imageUrlInput.type = 'hidden';
//   imageUrlInput.name = 'imageUrl';
//   imageUrlInput.value = secure_url;
//   form.appendChild(imageUrlInput);
// });

// const deleteBtns = document.querySelectorAll(".delete-btn");

// deleteBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const productId = btn.closest(".card").id;
//     deleteProduct(productId);
//   });
// });

// function deleteProduct(productId) {
//   fetch(`/api/auth/products/${productId}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // refresh the page or remove the product from the UI
//     })
//     .catch((error) => console.log(error));
// }

var baseUrl = "http://localhost:4000/api/auth/";

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", addProduct);

async function addProduct(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let productimage = document.getElementById("productimage").value;
  let category = document.getElementById("category").value;
  let quantity = document.getElementById("quantity").value;


  try {
    console.log(name);
    const response = await fetch(baseUrl + "products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        name: name,
        price: price,
        productimage: productimage,
        category: category,
        quantity: quantity,
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
        location.href = "/pages/ufProducts.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}

// var submitBtn = document.getElementById("submitbutton");
// submitBtn.addEventListener("click", );

// Get all products
fetch("http://localhost:4000/api/auth/products/", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
  mode: "cors",
})
  .then((response) => response.json())
  .then((data) => {
    let productCards = "";
    data.data.map((product) => {
      productCards += `
        <div class="card">
          <img src="${product.imageUrl}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Unit Price: UGX:${product.price}</p>
          <h4>${product.category}</h4>
          <p>Qty: ${product.quantity}</p>
          <div class="icon-container">
          <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal11">
          <i class="bi bi-trash" style="color: red; outline:none; font-size:80px;"></i>
        </button>
            <button id="editProduct" class="edit-btn" data-id="${product._id}"><i class="bi bi-pencil-square"></i></button>
          </div>
        </div>`;
    });

    document.getElementById("product-container").innerHTML = productCards;
  })
  .catch((error) => console.log(error));

// add event listeners to delete buttons
const deletebutton = document.getElementById("deleteProduct");
deletebutton.addEventListener("click", deleteProduct);

async function deleteProduct(event) {
  event.preventDefault();
  const productId = event.target.dataset.id;
  try {
    const response = await fetch(
      `http://localhost:4000/api/auth/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}
