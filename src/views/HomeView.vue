<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <main>
    <Header />
    <Footer />
    <TheWelcome v-animate-on-scroll />
  </main>
</template>
