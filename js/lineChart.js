// Get the canvas element and create a new Chart object
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');
const chart = new Chart(ctx, {
  // Set the chart type to line
  type: 'line',
  // Set the data for the chart
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sales',
      data: [500, 1000, 750, 1250, 1750, 1250, 1500],
      borderColor: 'orangered',
      fill: false
    }]
  },
  // Set the options for the chart
  options: {
    title: {
      display: true,
      text: 'Sales by Month'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

