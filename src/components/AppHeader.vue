<script setup>
import { useGlobalState } from '../js/state';
import { nextWeek } from '../js/game'

const state = useGlobalState()
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
            <router-link class="nav-link" to="/directors">Directors</router-link>
          </li>
          <li class="nav-item">
            <router-link id="sales-link" class="nav-link" to="/sales">Sales</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/finance">Finance</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/employees">Employees</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/operations">Operations</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary me-3" data-bs-toggle="offcanvas" data-bs-target="#tutorialOffcanvas">Show Tutorial</button>
      <button class="btn btn-lg btn-primary" type="button" @click="nextWeek">
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