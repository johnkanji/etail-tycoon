<script setup>
import { useGlobalState } from '../js/state';
import { nextWeek } from '../js/game'

const state = useGlobalState()
const clickTutorial = () => {
  if (state.value.tutorial.step === 0) { state.value.tutorial.advanceTutorial() }
}
const clickDirectors = () => {
  if (state.value.tutorial.step === 1) { state.value.tutorial.advanceTutorial() }
}
const clickSales = () => {
  if (state.value.tutorial.step === 2) { state.value.tutorial.advanceTutorial() }
}
const clickEmployees = () => {
  if (state.value.tutorial.step === 4) { state.value.tutorial.advanceTutorial() }
}
const clickNextWeek = () => {
  nextWeek()
  if (state.value.tutorial.step === 6) { state.value.tutorial.advanceTutorial() }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid mx-2">
      <a class="navbar-brand" href="#">eTail Tycoon</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarsContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link id="step-1" class="nav-link" to="/directors" @click="clickDirectors">Directors</router-link>
          </li>
          <li class="nav-item">
            <router-link id="step-2" class="nav-link" to="/sales" @click="clickSales">Sales</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/finance">Finance</router-link>
          </li>
          <li class="nav-item">
            <router-link id="step-4" class="nav-link" to="/employees" @click="clickEmployees">Employees</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/operations">Operations</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Marketing</router-link>
          </li>
        </ul>
      </div>
      <button id="step-0" type="button" class="btn btn-primary me-3" data-bs-toggle="offcanvas" data-bs-target="#tutorialOffcanvas" @click="clickTutorial">Show Tutorial</button>
      <button id="step-6" class="btn btn-lg btn-primary" type="button" @click="clickNextWeek">
        Next Week
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </nav>
</template>

<style>
  .nav-item {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
</style>