<script setup>
import PageTitle from '../components/PageTitle.vue';
import CashflowChart from '../components/finance/CashflowChart.vue'
import CashFlowTable from '../components/finance/CashFlowTable.vue';
</script>
<template>
  <main role="main" class="container">
    <PageTitle>Finance</PageTitle>

    <div class="row">
      <div class="col-6 border-end">
        <div class="pe-3 pb-3">
          <CashFlowTable />
        </div>
      </div>
      <div class="col-6">
        <CashflowChart class="ps-3 pb-3" />
      </div>
    </div>

  </main>
</template>