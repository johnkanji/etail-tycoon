<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartData = ref({
    labels: [ 'January', 'February', 'March' ],
    datasets: [{
        label: 'Income',
        data: [40, 20, 12],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        stack: 0
    }, {
        label: 'Expenses',
        data: [-10, -30, -25],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        stack: 0
    }, {
        label: 'Profit/Loss',
        data: [30, -10, -13],
        stack: 1
    }],
    options: {
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        },
    }
})
const chartOptions = ref({
responsive: true
})
</script>
<template>
  <div class="cashflowChartHeader d-flex justify-content-between mb-2">
    <h5 class="my-auto">Cash Flow</h5>
  </div>
  <hr>
  <Bar id="cashflowChart" :options="chartOptions" :data="chartData" />
</template>