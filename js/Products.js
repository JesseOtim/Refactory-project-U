
var baseUrl = 'http://localhost:4000/api/pages/';

document.getElementById('submitbutton').addEventListener('click', function(click) {
    newProduct(click);
});

async function newProduct(event) {
    event.preventDefault();
    let Name= document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let quantity= document.getElementById('quantity').value;
    

    try {
        console.log(email)
        const response = await fetch(baseUrl + 'products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                "name": Name,
                "price": price,
                "category": category,
                "quantity": quantity,
            })
        })
        const data = await response.json()
        console.log(data,'>>>>>>>>>')
        if (data.status == 201) {
            alert(data.message)
            //close modal
            setTimeout(function(){location.href="/Auth/signup.html"} , 200);  
        }

    } catch (error) {
        console.log(error)
    }

}




