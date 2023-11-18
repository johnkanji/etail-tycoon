<script setup>
import Header from '../components/AppHeader.vue'
import Footer from '../components/AppFooter.vue'
import TutorialSidebar from '../components/TutorialSidebar.vue';
</script>

<template>
  <Header />
  <TutorialSidebar />
  <div class="container py-4 px-3 mx-auto">
    <router-view></router-view>
    <Footer />
  </div>
</template>
