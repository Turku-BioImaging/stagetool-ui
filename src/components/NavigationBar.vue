<template>
  <div
    class="navigation-bar"
    :class="{ 'menu-is-open': menuIsOpen, 'menu-is-closed': !menuIsOpen, 'is-top': isTop }"
    @click.stop
  >
    <div class="header">
      <div class="bars-div pr-2" @click="toggleMenu">
        <i class="uil uil-bars text-3xl"></i>
      </div>
      <h1 v-show="!isTop"><router-link to="/">StageTool</router-link></h1>
    </div>
    <div class="menu-items" v-if="menuIsOpen" @click="toggleMenu">
      <ul>
        <li>
          <router-link to="/"><i class="uil uil-home"></i> Home</router-link>
        </li>
        <li><router-link to="/what-is-stagetool">What is StageTool?</router-link></li>
        <li><router-link to="/cell-model">Cell Model</router-link></li>
        <li><router-link to="/tubule-model">Tubule Model</router-link></li>
        <li><router-link to="/troubleshooting">Troubleshooting</router-link></li>
        <!-- <li>Whole-testis analysis & expression profiling</li> -->
        <li><router-link to="/developers-and-funding">Developers & Funding</router-link></li>
        <!-- <li>Citation</li> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import type { RouteLocationNormalized } from 'vue-router'

export default {
  data() {
    return {
      menuIsOpen: false,
      isTop: true
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen
    },
    closeMenu() {
      this.menuIsOpen = false
    },
    checkScroll() {
      if (this.$router.currentRoute.value.path === '/' && window.scrollY <= 100) {
        this.isTop = true
      } else {
        this.isTop = false
      }
    },
    routeChanged(to: RouteLocationNormalized, from: RouteLocationNormalized) {
      if (to.path === '/') {
        this.isTop = true
      } else {
        this.isTop = false
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.closeMenu)
    window.addEventListener('scroll', this.checkScroll)
    this.checkScroll()
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeMenu)
    window.removeEventListener('scroll', this.checkScroll)
  },
  watch: {
    $route: 'routeChanged'
  }
}
</script>

<style lang="scss">
div.navigation-bar {
  @apply border-b border-slate-800;
  @apply px-3 py-3;
  // position: sticky;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  
  div.header {
    @apply flex items-center;
    h1 {
      // @apply font-semibold;
      @apply text-xl font-semibold not-italic text-white;
      // font-style: normal !important;
    }

    div.bars-div {
      cursor: pointer;
      @apply text-cyan-500;
    }
  }

  div.menu-items {
    @apply text-lg;

    ul {
      @apply pt-3 pl-3;
      li {
        @apply pb-2;

        a {
          @apply text-white;
          font-style: normal !important;
        }
      }
    }

    z-index: 500;
  }

  &.menu-is-open {
    @apply bg-slate-900;
  }

  &.menu-is-closed {
    // @apply bg-slate-900;
    @apply bg-black;
  }

  &.is-top {
    // @apply bg-slate-900;
    @apply border-none;
  }
}
</style>
