var baseUrl = "http://localhost:4000/api/auth/";

async function loadFarmers() {
    const response = await fetch('/api/farmer');
    const farmers = await response.json();
    
    const tableRows = document.querySelectorAll('#farmer-list tbody tr');
    farmers.forEach((farmer, index) => {
      const row = tableRows[index];
      row.querySelector('td:nth-child(1)').textContent = farmer.name;
      row.querySelector('td:nth-child(2)').textContent = farmer.email;
      row.querySelector('td:nth-child(3)').textContent = farmer.phoneNumber;
      row.querySelector('td:nth-child(4)').textContent = farmer.nin;
      row.querySelector('td:nth-child(5)').textContent = farmer.dateOfBirth;
      row.querySelector('td:nth-child(6)').textContent = farmer.dateOfRegistration;
      row.querySelector('td:nth-child(7)').textContent = farmer.periodOfStay;
    });
  }
  
  // Call the function to load the Farmer data when the page is loaded
  loadFarmers();
  