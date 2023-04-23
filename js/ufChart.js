var colors = ["red", "blue", "darkgreen", "yellow"];
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [1200, 800, 1500, 1100, 1900, 1400, 950],
        backgroundColor: "rgba(30,50,200,1)",
        borderColor: "rgba(50,110,50,0.2)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});