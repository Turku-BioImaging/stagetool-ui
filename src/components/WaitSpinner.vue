<template>
  <div class="wait-spinner">
    <flower-spinner :animation-duration="2500" :size="85" color="#cbd5e1" />

    <h2 class="font-semibold text-lg mt-6">Please wait...</h2>
    <p class="text-center">
      StageTool is processing your images. <br />This can take several minutes.
    </p>
  </div>
</template>

<script lang="ts">
// import GridLoader from 'vue-spinner/src/GridLoader.vue'
import { FlowerSpinner } from 'epic-spinners'

export default {
  name: 'WaitSpinner',
  components: { FlowerSpinner }
}
</script>
<style lang="scss">
div.wait-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @apply bg-slate-900 bg-opacity-95;
  @apply flex flex-col items-center justify-center;
}
</style>
