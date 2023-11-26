<script setup>
import PageTitle from '../components/PageTitle.vue';

</script>
<template>
  <main role="main" class="container">
    <PageTitle>Board of Directors</PageTitle>
    <div class="row">
      
    </div>
    <div class="row">
      <div class="col-5 mx-auto">
        <h5 class="my-auto">Objectives</h5>
        <hr>
        <ul class="list-group">
          <li class="list-group-item">
            <i class="bi bi-check-square-fill text-success me-2"></i>
            Stock your first product.
          </li>
          <li class="list-group-item">
            <i class="bi bi-square me-2"></i>
            Hire 10 workers.
          </li>
          <li class="list-group-item">
            <i class="bi bi-square me-2"></i>
            Raise the stock price to at least $120.
          </li>
          <li class="list-group-item">
            <i class="bi bi-square me-2"></i>
            Earn total profit of at least $100,000 this quarter.
          </li>
        </ul>
      </div>
      <div class="col-5 mx-auto">
        <img src="/public/images/boardroom.jpg" class="img-fluid mx-auto" alt="Board Room">
      </div>
    </div>
  </main>
</template>
<style scoped>
</style>
