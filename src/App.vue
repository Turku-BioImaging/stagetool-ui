<script setup lang="ts">
import { RouterView } from 'vue-router'
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
      const isHomePage = this.$router.currentRoute.value.path === '/'
      const isScrolled = window.scrollY < 400
      const isPageShort = document.documentElement.scrollHeight <= window.innerHeight

      if (isHomePage && (isScrolled || isPageShort)) {
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
}
</style>
