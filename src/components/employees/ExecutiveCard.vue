<script setup>
import { computed } from 'vue'
import StarRating from '../StarRating.vue'

const props = defineProps(['name', 'title', 'rating', 'salary', 'avatar'])

const fullTitle = computed(() => {
    switch (props.title) {
        case 'CEO':
            return 'Chief Executive Officer'
        case 'CFO':
            return 'Chief Financial Officer'
        case 'COO':
            return 'Cheif Operating Officer'
        case 'DHR':
            return 'Head of Human Resources'
        case 'DPR':
            return 'Head of Public Relations'
        default:
            break;
    }
})
</script>
<template>
<div class="card text-center">
    <figure>
        <img :src="props.avatar" class="figure-image img-fluid rounded-circle" width="140" height="140">
    </figure>
    <h5 class="">{{ props.name }}<br/></h5>
    <figcaption class="figure-caption text-center">{{ fullTitle }}</figcaption>
    <StarRating v-if="!isNaN(props.rating)" :stars="props.rating" of="3" />
    <figcaption class="figure-caption text-center">Salary: ${{ props.salary }}/week</figcaption>
</div>
</template>
<style>
.card {
  padding: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
h5 {
    margin: 0;
}
</style>