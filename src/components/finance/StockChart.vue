<script setup>
import { ref, onMounted } from 'vue';
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)
const chartData = ref({
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
    datasets: [{
        label: '$AMZN',
        data: [120, 118, 123, 119, 89, 92, 89, 93, 90, 100],
        backgroundColor: 'goldenrod',
        borderColor: 'goldenrod',
    }]
})
const chartOptions = ref({
  responsive: true
})
</script>

<template>
<div class="mb-4">
  <div class="stockChartHeader d-flex justify-content-between mb-2">
    <h5 class="my-auto">Stock Price</h5>
  </div>
  <hr>
  <Line id="stockChart" :options="chartOptions" :data="chartData"/>
</div>
</template>

