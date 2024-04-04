<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
