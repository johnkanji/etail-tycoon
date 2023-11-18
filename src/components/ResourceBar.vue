<script setup>
import { computed } from 'vue'
import { useGlobalState } from '../js/state.js';

import ResourceDisplay from './ResourceDisplay.vue';

const state = useGlobalState().value

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})
const dateDisplay = computed(() => `Q${state.quarter}   Week ${state.week}`)
const employeesDisplay = computed(() => { return state.employees.executives.length + state.employees.workers.map(w => parseInt(w.num_employed)).reduce((a,b) => a + b, 0) })
const cashDisplay = computed(() => { return currencyFormatter.format(state.cash) })
const stockDisplay = computed(() => { return currencyFormatter.format(state.stock_price) })

</script>
<template>
    <div class="d-flex mt-2">
        <ResourceDisplay :text="dateDisplay" info="Current Date" icon="bi-calendar2-week" badge-type="danger"/>
        <ResourceDisplay :text="employeesDisplay" info="Total Employees" icon="bi-people-fill" badge-type="warning"/>
        <ResourceDisplay :text="cashDisplay" info="Cash Reserves" icon="bi-cash-stack" badge-type="success"/>
        <ResourceDisplay :text="stockDisplay" info="Stock Price" icon="bi-graph-up" badge-type="primary"/>
    </div>
</template>