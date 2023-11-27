<script setup>
import { onMounted, computed } from 'vue'
import { Tooltip } from 'bootstrap'
import { useGlobalState } from '../../js/state';
import SatisfactionIcon from '../SatisfactionIcon.vue';

const state = useGlobalState()

const satisfactionEstChangeDisplay = computed(() => { 
    const total_workers = state.value.employees.workers.map(w => w.num_employed).reduce((a,b) => a + b, 0)
    if (total_workers > 0) {
        return "↑"
    } else {
        return "↓"
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
    <h4 class="me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Customer Satisfaction">
        <div class="badge bg-danger">
            <i class="bi bi-heart-fill"></i>
            <SatisfactionIcon class="fs-5 ms-1" value="2"/>
            (<span :class="satisfactionEstChangeDisplay.includes('↑') ? 'estIncrease' : 'estDecrease'">{{ satisfactionEstChangeDisplay }}</span>)
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