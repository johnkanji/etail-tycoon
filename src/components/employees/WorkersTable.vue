<script setup>
import { useGlobalState } from '../../js/state';
import { currencyFormatter } from '../../js/formatter';
import { ref } from 'vue';

const props = defineProps(['hideEditButton', 'hideEmptyJobs'])
const editMode = ref(false)

const state = useGlobalState()
console.log(props)
let workerFilter = (w) => true
if (props.hideEmptyJobs === '') {
    workerFilter = (w) => w.num_employed > 0
}

const clickSave = () => {
  if (state.value.tutorial.step === 5) { state.value.tutorial.advanceTutorial() }
}

</script>
<template>
    <div class="workerTable">
        <div class="workerTableHeader d-flex justify-content-between mb-2">
            <h5 class="my-auto">Workers</h5>
            <div v-if="props.hideEditButton !== ''">
                <button v-if="!editMode" id="step-5" @click="editMode = true" type="button" class="btn btn-primary btn-sm">Hire</button>
                <button v-if="editMode" type="button" @click="editMode = false; clickSave()" class="btn btn-success btn-sm">Save</button>
            </div>
        </div>
        <hr>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Number Employed</th>
                    <th scope="col">Hourly Wage</th>
                    <th scope="col">Average Happiness</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="worker in state.employees.workers.filter(workerFilter)">
                    <td>{{ worker.title }}</td>
                    <td>
                        <input v-if="editMode" type="text" class="form-text me-3" for="numEmployed" v-model="worker.num_employed">
                        <span v-else>{{ worker.num_employed }}</span>
                    </td>
                    <td class="text-end d-flex">
                        
                        <input v-if="editMode" type="range" class="form-range me-3" for="workerWage" min="5" max="50" step="0.5" v-model="worker.wage">
                        {{ currencyFormatter.format(worker.wage) }}
                    </td>
                    <td class="text-center"><SatisfactionIcon :value='worker.satisfaction' /></td>
                </tr>
                <tr v-if="state.employees.workers.filter(workerFilter).length === 0">
                    <td colspan="6" class="text-center">
                        Nothing to show here. Hire workers on the <router-link to="/employees">Employees</router-link> page.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
</style>