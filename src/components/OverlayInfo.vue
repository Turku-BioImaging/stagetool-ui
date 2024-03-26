<template>
  <div class="overlay-info-component">
    <button @click="closeOverlay" class="close-button">
      <i class="uil uil-multiply text-2xl"></i>
    </button>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    closeOverlay() {
      this.$emit('close-overlay')
      document.body.style.overflow = 'auto'
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'
  }
}
</script>
<style lang="scss">
div.overlay-info-component {
  @apply bg-black;
  @apply w-full h-full;
  @apply fixed top-0 left-0;
  @apply px-6 py-8;
  overflow-y: auto;
  z-index: 1100;

  div.image-div {
    @apply mt-6;
    @apply px-12;
    ul {
      li {
        p {
          @apply text-center text-cyan-400;
        }
      }

      li:not(:last-child) {
        @apply mb-8;
      }
    }
  }

  h1 {
    @apply uppercase text-2xl font-semibold text-center text-cyan-400;
  }
  h2 {
    @apply text-xl text-center font-semibold text-cyan-400;
  }
}
</style>
