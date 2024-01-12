<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="max-w-6xl mx-auto">
    <Navbar />
    <RouterView class="px-4 lg:px-0 my-10" />
  </main>
  <Footer></Footer>
</template>
