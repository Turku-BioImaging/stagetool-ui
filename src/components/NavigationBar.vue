<template>
  <div class="navigation-bar">
    <div class="container mx-auto">
      <div class="content-div">
        <div class="menu-items-lg">
          <h1><router-link to="/">StageTool</router-link></h1>
          <ul>
            <li>
              <router-link to="/what-is-stagetool">About StageTool</router-link>
            </li>
            <li>
              <router-link to="/models">Models</router-link>
            </li>
            <!-- <li><router-link to="/cell-model">Cell Model</router-link></li>
            <li>
              <router-link to="/tubule-model">Tubule Model</router-link>
            </li> -->
            <li>
              <router-link to="/troubleshooting">Troubleshooting</router-link>
            </li>
            <li>
              <router-link to="/developers-and-funding">Developers &amp; Funding</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
export default {
  name: 'NavigationBar'
}
</script>

<style lang="scss" scoped>
div.navigation-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  @apply border-slate-100 border-b;

  @apply py-3;

  div.content-div {
    @screen lg {
      @apply w-3/4 mx-auto;
    }
  }

  div.menu-items-lg {
    visibility: hidden;
    @screen lg {
      visibility: visible;
    }

    @apply flex items-center;
    h1 {
      @apply text-2xl font-semibold text-slate-700 uppercase tracking-widest;
      a {
        @apply text-slate-700;
      }
    }

    ul {
      @apply flex items-center justify-end;
      @apply w-full;

      li {
        a {
          @apply text-slate-700 hover:text-rose-500;
        }
      }

      li:not(:first-child) {
        @apply ml-6;
      }
    }
  }

  // &.menu-is-closed {
  //   background-color: rgba(255, 255, 255, 0.95);
  //   @apply border-slate-100 border-b;
  // }

  // &.is-top {
  //   @apply border-none;
  // }
}
</style>
