<script setup>
import { onMounted, computed } from 'vue'
import { Tooltip } from 'bootstrap'
import { useGlobalState } from '../../js/state';
import { currencyFormatter } from '../../js/formatter';

const state = useGlobalState()

const cashDisplay = computed(() => { return currencyFormatter.format(state.value.cash) })
const cashEstChangeDisplay = computed(() => { 
    const payroll = state.value.employees.workers
        .map(w => parseInt(w.num_employed) * parseFloat(w.wage) * 40)
        .reduce((a,b) => a + b, 0)
    const inventory = state.value.products
        .map(p => Math.floor(10*p.demand) * parseFloat(p.unitPrice))
        .reduce((a,b) => a + b, 0)
    const rent = 1000;
    const estimate = Math.floor(10*(payroll + inventory + rent) / state.value.cash)
    if (estimate < 0) {
        return "↓".repeat(estimate)
    } else if (estimate > 0) {
        return "↑".repeat(estimate)
    } else {
        return "-"
    }
})

onMounted(() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(tooltip => {
            new Tooltip(tooltip)
    })
});
</script>
<template>
    <h4 class="me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Budget">
        <div class="badge bg-success">
            <i class="bi bi-cash-stack me-1"></i>
            {{ cashDisplay }} (<span :class="cashEstChangeDisplay.includes('↑') ? 'estIncrease' : (cashEstChangeDisplay.includes('↓') ? 'estDecrease' : '')">{{ cashEstChangeDisplay }}</span>)
        </div>
    </h4>
</template>
<style scoped>
.estIncrease {
    color: mediumspringgreen;
}
.estDecrease {
    color: red;
}
</style>