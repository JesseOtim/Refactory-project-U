
var baseUrl = 'http://localhost:4000/api/auth/';

document.getElementById('submitbutton').addEventListener('click', function(click) {
    addProduct(click);
});

async function addProduct(event) {
    event.preventDefault();
    let Name= document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('uploadimage').value;
    let category = document.getElementById('category').value;
    let quantity= document.getElementById('quantity').value;
    

    try {
     
        const response = await fetch(baseUrl + 'products/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                "name": Name,
                "price": price,
                "image": image,
                "category": category,
                "quantity": quantity,
            })
        })
        const data = await response.json()
        console.log(data,'>>>>>>>>>')
        if (data.status == 201) {
            alert(data.message)
            //close modal
            setTimeout(function(){location.href="/Auth/Products.html"} , 200);  
        }

    } catch (error) {
        console.log(error)
    }

}

const form = document.getElementById('register-form');
const uploadInput = document.getElementById('uploadimage');

uploadInput.addEventListener('change', async () => {
  const file = uploadInput.files[0];

  // Upload the file to Cloudinary
  const { secure_url } = await cloudinary.uploader.upload(file);

  // Set the image URL in a hidden input field so it's included in the form data
  const imageUrlInput = document.createElement('input');
  imageUrlInput.type = 'hidden';
  imageUrlInput.name = 'imageUrl';
  imageUrlInput.value = secure_url;
  form.appendChild(imageUrlInput);
});





