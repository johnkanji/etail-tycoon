<script setup>
import PageTitle from '../components/PageTitle.vue';
import ProductList from '../components/sales/ProductList.vue'
import { useGlobalState } from '../js/state';
import WorkersTable from '../components/employees/WorkersTable.vue';
import ProfitChart from '../components/finance/ProfitChart.vue';
import RevenueChart from '../components/finance/RevenueChart.vue';

const state = useGlobalState()

</script>
<template>
  <main role="main" class="container">
    <PageTitle>Dashboard</PageTitle>
    <!-- <section class="jumbotron text-center p-2">
      <div class="container">
        <h1>Bootstrap starter template</h1>
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
      </div>
    </section> -->
    <div class="row mb-3">
      <div class="col-5 mx-auto">
        <ProductList hideEditButton />
      </div>
      <div class="col-5 mx-auto">
        <WorkersTable hideEditButton hideEmptyJobs />
      </div>
    </div>
    <div class="row">
      <div class="col-5 mx-auto">
        <RevenueChart />
      </div>
      <div class="col-5 mx-auto">
        <ProfitChart />
      </div>
    </div>
  </main>
</template>