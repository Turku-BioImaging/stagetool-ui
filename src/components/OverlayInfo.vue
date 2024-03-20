<template>
  <div class="overlay-info-component">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
div.overlay-info-component {
  @apply bg-rose-500;
  @apply w-full h-full;
  @apply fixed top-0 left-0;
  z-index: 100;
}
</style>
