import { Controller } from "@hotwired/stimulus"

// import {Chart, registrables} from 'chart.js'
// Chart.register(...registrables);


// Import specific components from chart.js
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// Register the components with Chart.js
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


// Connects to data-controller="dashboard"
export default class extends Controller {
  static values = { revenue: Array}

  initialize() {
    const data = this.revenueValue.map((item) => item[1]/100)
    const labels = this.revenueValue.map((item) => item[0])

    const ctx = document.getElementById('revenueChart')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Revenue $',
          data: data,
          backgroundColor: '#add88d40', // Ocean blue with 0.2 alpha for fill
          borderColor: '#add88d',
          borderWidth: 3,
          fill: true
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          scales: {
            x: {
              grid: {
                display: false // Hide horizontal grid lines
              },
              ticks: { // Ensure x-axis starts at 0
                beginAtZero: true
              }
            },
            y: {
              beginAtZero: true, // Ensure y-axis starts at 0
              grid: {
                color: "rgba(0,0,0,0.05)", // Set horizontal grid line color
                drawTicks: false // Hide vertical grid lines
              },
              border: {
                dash: [5, 5] // Set dashed border for y-axis
              }
            }
          }
        }
      }
    });    
  }
}
