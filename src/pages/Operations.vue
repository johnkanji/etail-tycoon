<script setup>
import PageTitle from '../components/PageTitle.vue';
import FacilityCard from '../components/operations/FacilityCard.vue';
import FacilityAdd from '../components/operations/FacilityAdd.vue';
</script>
<template>
  <main role="main" class="container">
    <PageTitle>Operations</PageTitle>

    <div class="row">
      <div class="col-6 border-end">
        <section>
          <h4 class="mb-4">
            <i class="bi bi-box-seam" style="width: 1em; margin-right: 0.5em"></i>
            Warehouses
          </h4>
          <div class="d-flex pe-3 pb-3">
            <FacilityCard type="warehouse" name="Garage Warehouse" level="1" />
            <FacilityAdd type="warehouse" />
          </div>
        </section>
        <hr/>
        <section>
          <h4 class="mb-4"><i class="bi bi-hdd-rack" style="width: 1em; margin-right: 0.5em"></i>Data Centres</h4>
          <div class="d-flex pe-3 pb-3">
            <FacilityAdd type="data_centre" />
          </div>
        </section>
      </div>
      <div class="col-6">
        <section>
          <h4 class="mb-4"><i class="bi bi-headset" style="width: 1em; margin-right: 0.5em"></i>Call Centers</h4>
          <div class="d-flex pe-3 pb-3">
            <FacilityAdd type="call_centre" />
          </div>
        </section>
        <hr/>
        <section>
          <h4 class="mb-4"><i class="bi bi-buildings" style="width: 1em; margin-right: 0.5em"></i>Offices</h4>
          <div class="d-flex pe-3 pb-3">
            <FacilityCard type="office" name="Bedroom Office" level="1" />
            <FacilityAdd type="office" />
          </div>
        </section>
      </div>
    </div>

  </main>
</template>