<script setup>
import PageTitle from '../components/PageTitle.vue';
import { useGlobalState } from '../js/state';
import ProductTable from '../components/sales/ProductTable.vue';
import WorkersTable from '../components/employees/WorkersTable.vue';
import CashflowChart from '../components/finance/CashflowChart.vue';
import StockChart from '../components/finance/StockChart.vue';

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
        <ProductTable hideEditButton />
        <CashflowChart />
      </div>
      <div class="col-5 mx-auto">
        <StockChart/>
        <WorkersTable hideEditButton hideEmptyJobs />
      </div>
    </div>
  </main>
</template>