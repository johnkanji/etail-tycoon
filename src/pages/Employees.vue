<script setup>
import PageTitle from '../components/PageTitle.vue';
import WorkersTable from '../components/employees/WorkersTable.vue'
import ExecutiveCard from '../components/employees/ExecutiveCard.vue'
import { useGlobalState } from '../js/state.js';

const state = useGlobalState()

</script>
<template>
  <main role="main" class="container">
    <PageTitle>Employees</PageTitle>
    <section class="px-4 mb-3">
      <div class="workerTableHeader d-flex justify-content-between mb-2">
        <h5 class="my-auto">Executives</h5>
        </div>
        <hr>
        <div class="d-inline-flex justify-content-start">
          <ExecutiveCard :name="state.player.name" title="CEO" :avatar="state.player.portrait" salary="0" />
          <ExecutiveCard v-for="exec in state.employees.executives" v-bind="exec"></ExecutiveCard>
        </div>
    </section>

    <section class="px-4">
      <div class="row">
        <WorkersTable/>
      </div>
    </section>
  </main>
</template>