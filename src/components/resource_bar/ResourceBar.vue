<script setup>
import { computed } from 'vue'
import { useGlobalState } from '../../js/state.js';

import ResourceDisplay from './ResourceDisplay.vue';
import SatisfactionIcon from '../SatisfactionIcon.vue';
import StarRating from '../StarRating.vue';
import BudgetMeter from './BudgetMeter.vue';
import ImageMeter from './ImageMeter.vue';
import CustomerSatisfactionMeter from './CustomerSatisfactionMeter.vue';

const state = useGlobalState().value

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})
const dateDisplay = computed(() => `Q${state.quarter}   Week ${state.week}`)
const stockDisplay = computed(() => { return currencyFormatter.format(state.stock_price) })

</script>
<template>
    <div class="d-flex mt-2">
        <ResourceDisplay info="Current Date" icon="bi-calendar2-date" badge-type="secondary">
            {{ dateDisplay }}
        </ResourceDisplay>
        <CustomerSatisfactionMeter id="step-10" />
        <ImageMeter id="step-9" />
        <BudgetMeter id="step-8" />
        <ResourceDisplay id="step-7" info="Stock Price" icon="bi-graph-up" badge-type="primary">
            {{ stockDisplay }}
        </ResourceDisplay>
    </div>
</template>
<style lang="scss" scoped>
.badge {
    /* margin-left: 0.25rem; */
    /* margin-right: 0.25rem; */
    font-weight: normal !important;
}
.bg-primary {
    color: var(--bs-body-color);
}
i {
    width: 1em;
    margin-right: 0.25em;
}
</style>