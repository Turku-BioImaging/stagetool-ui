<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="app">
    <navigation-bar/>

    <RouterView class="mt-12" />
  </div>
</template>

<style lang='scss'>
div.app {
  height: 100vh;
}
</style>
