<script setup>
import { computed } from 'vue'
import { useGlobalState } from '../js/state.js';

import ResourceDisplay from './ResourceDisplay.vue';
import SatisfactionIcon from './SatisfactionIcon.vue';
import StarRating from './StarRating.vue';

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
        <ResourceDisplay info="Current Date" icon="bi-calendar2-date" badge-type="secondary">
            {{ dateDisplay }}
        </ResourceDisplay>
        <ResourceDisplay id="step-10" info="Customer Satisfaction" icon="bi-heart-fill" badge-type="danger">
            <SatisfactionIcon class="fs-5" value="2"/>
        </ResourceDisplay>
        <ResourceDisplay id="step-9" info="Public Image" icon="bi-people-fill" badge-type="warning">
            <StarRating stars="2.5" of="3"></StarRating>
        </ResourceDisplay>
        <ResourceDisplay id="step-8" info="Budget" icon="bi-cash-stack" badge-type="success">
            {{ cashDisplay }}
        </ResourceDisplay>
        <ResourceDisplay id="step-7" info="Stock Price" icon="bi-graph-up" badge-type="primary">
            {{ stockDisplay }}
        </ResourceDisplay>
    </div>
</template>