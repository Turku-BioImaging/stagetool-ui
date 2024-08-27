<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>
<script lang="ts">
export default {
  data() {
    return {
      menuIsOpen: true
    }
  },
  methods: {
    checkScroll() {
      if (this.$router.currentRoute.value.path === '/' && window.scrollY <= 200) {
        this.menuIsOpen = false
      } else {
        this.menuIsOpen = true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll)
    this.checkScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll)
  }
}
</script>

<template>
  <div class="app">
    <navigation-bar v-show="menuIsOpen" />

    <RouterView />
  </div>
</template>

<style lang="scss">
div.app {
  height: 100vh;

  // div.clear-div {
  //   @apply mt-24;
  // }
}
</style>
