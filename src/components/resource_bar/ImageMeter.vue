<script setup>
import { onMounted, computed } from 'vue'
import { Tooltip } from 'bootstrap'
import { useGlobalState } from '../../js/state';
import StarRating from '../StarRating.vue';

const state = useGlobalState()

const imageEstChangeDisplay = computed(() => { 
    if (state.value.products.length > 0) {
        return "↑"
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
    <h4 class="me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Public Image">
        <div class="badge bg-warning">
            <i class="bi bi-people-fill"></i>
            <StarRating class="ms-1" stars="2.5" of="3"></StarRating>
            (<span :class="imageEstChangeDisplay.includes('↑') ? 'estIncrease' : 'estSteady'">{{ imageEstChangeDisplay }}</span>)
        </div>
    </h4>
</template>
<style scoped>
.estIncrease {
    color: mediumspringgreen;
}
</style>