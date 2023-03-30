var colors = ["red","blue","darkgreen","yellow"]
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart= new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Monthly Earnings',
        data: [1200, 800, 1500, 1100, 1900, 1400],
        backgroundColor:'rgba(50,125,50,1)',
        borderColor:'rgba(50,110,50,0.2)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


