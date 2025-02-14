<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen sm:py-12 pt-6 flex flex-col justify-between xl:gap-12 sm:gap-6 gap-16 bg-gray-200 overflow-hidden">
    <header>
      <h2 class="text-center sm:text-2xl text-xl font-semibold">VerseCatch</h2>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
