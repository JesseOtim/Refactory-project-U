var baseUrl = "http://localhost:3001/api/auth/";

const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", newLogin);

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(message) {
    // Assuming you have an error element with id 'error-message'
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    } else {
        alert(message); // Fallback to alert if error element doesn't exist
    }
}

async function newLogin(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    // Basic validation
    if (!email || !password) {
        showError("Email and password are required");
        return;
    }

    if (!validateEmail(email)) {
        showError("Please enter a valid email address");
        return;
    }

    try {
        const response = await fetch(baseUrl + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (response.ok && data.status === 200) {
            // Success case
            var toastEl = document.getElementById("liveToast");
            var toast = new bootstrap.Toast(toastEl);
            toast.show();

            // Store user data if needed
            localStorage.setItem('userRole', data.data.role);
            
            setTimeout(function () {
                switch(data.data.role) {
                    case "agricOfficer":
                        location.href = "/pages/aoDash.html";
                        break;
                    case "farmerOne":
                        location.href = "/pages/foDash.html";
                        break;
                    case "urbanFarmer":
                        location.href = "/pages/ufDash.html";
                        break;
                    case "user":
                        location.href = "/pages/Products.html";
                        break;
                    default:
                        showError("Invalid user role received");
                }
            }, 500);
        } else {
            // Handle error response
            showError(data.message || "Login failed. Please check your credentials.");
        }
    } catch (error) {
        console.error("Login error:", error);
        showError("An error occurred during login. Please try again.");
    }
}

// var submitBtn = document.getElementById("submitbutton");
// submitBtn.addEventListener("click",);
