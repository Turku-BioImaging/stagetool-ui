<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterDefault from '@/components/FooterDefault.vue'
</script>
<script lang="ts">
export default {
  components: {
    NavigationBar,
    FooterDefault
  },
  data() {
    return {
      navbarIsVisible: true
    }
  },
  methods: {
    checkScroll() {
      const isHomePage = this.$router.currentRoute.value.path === '/'
      const isScrolled = window.scrollY < 400
      const isPageShort = document.documentElement.scrollHeight <= window.innerHeight

      if (isHomePage == true) {
        if (isScrolled || isPageShort) {
          this.navbarIsVisible = false
        } else {
          this.navbarIsVisible = true
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll)
    // this.checkScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll)
  }
}
</script>

<template>
  <div class="app">
    <navigation-bar v-show="navbarIsVisible" />

    <RouterView />
    <footer-default />
  </div>
</template>

<style lang="scss">
div.app {
  height: 100vh;
}
</style>
