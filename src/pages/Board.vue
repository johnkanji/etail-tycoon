<script setup>
import PageTitle from '../components/PageTitle.vue';

</script>
<template>
  <main role="main" class="container">
    <PageTitle>Board of Directors</PageTitle>
    <div class="row">
      <div class="col-5 mx-auto">
        <h5 class="my-auto">Objectives</h5>
        <ul class="list-group">
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <label class="form-check-label" for="firstCheckbox">Earn total profit of at least $100,000 this quarter</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
            <label class="form-check-label" for="secondCheckbox">Stock 3 products</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
            <label class="form-check-label" for="thirdCheckbox">Maintain a stock price of $100</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
            <label class="form-check-label" for="thirdCheckbox">Hire 2 executives</label>
          </li>
        </ul>
      </div>
      <div class="col-5 mx-auto"></div>
    </div>
  </main>
</template>