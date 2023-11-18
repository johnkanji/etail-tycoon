<script setup>
import { ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { useGlobalState } from '../../js/state';
import { computeWeeklySales } from '../../js/game'

const state = useGlobalState()

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
const chartData = ref({
    labels: state.value.products.map(p => p.name),
    datasets: [{
        data: computeWeeklySales()
    }],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
})
const chartOptions = ref({
responsive: true
})
</script>
<template>
    <Doughnut id="revenue-chart" :options="chartOptions" :data="chartData" />
</template>