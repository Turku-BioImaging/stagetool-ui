<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './src/components/NavigationBar.vue'
</script>

<template>
  <div class="app">
    <navigation-bar />

    <RouterView />
  </div>
</template>

<style lang='scss'>
div.app {
  // @apply p-3;
  height: 100vh;
}
</style>
