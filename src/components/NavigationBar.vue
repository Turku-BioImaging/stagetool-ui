<template>
  <div
    class="navigation-bar"
    :class="{ 'menu-is-open': menuIsOpen, 'menu-is-closed': !menuIsOpen }"
    @click.stop
  >
    <div class="header">
      <div class="bars-div pr-2" @click="toggleMenu">
        <i class="uil uil-bars text-3xl"></i>
      </div>
      <h1><router-link to="/">StageTool</router-link></h1>
    </div>
    <div class="menu-items" v-if="menuIsOpen" @click="toggleMenu">
      <ul>
        <li><router-link to="/what-is-stagetool">What is StageTool?</router-link></li>
        <li>Cell Model</li>
        <li>Tubule Model</li>
        <li>Troubleshooting</li>
        <li>Whole-testis analysis & expression profiling</li>
        <li>Developers</li>
        <li>Citation</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen
    },
    closeMenu() {
      this.menuIsOpen = false
    }
  },
  mounted() {
    window.addEventListener('click', this.closeMenu)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeMenu)
  }
}
</script>

<style lang="scss">
div.navigation-bar {
  // @apply bg-slate-900;
  @apply border-b border-slate-800;
  @apply px-3 py-2;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;

  div.header {
    @apply flex items-center;
    h1 {
      @apply font-semibold;
      @apply text-xl;
    }

    div.bars-div {
      cursor: pointer;
    }
  }

  div.menu-items {
    @apply text-lg;

    ul {
      @apply pt-3 pl-3;
      li {
        @apply pb-2;
      }
    }
  }

  &.menu-is-open {
    @apply bg-slate-800;
  }

  &.menu-is-closed {
    @apply bg-slate-900;
  }
}
</style>
