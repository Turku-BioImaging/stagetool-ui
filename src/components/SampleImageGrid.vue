<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'

const emit = defineEmits(['imageSelected'])

const sendImageSrc = (event) => {
  emit('imageSelected', event.target.src)
}
</script>
<script lang="ts">
export default {
  name: 'SampleImageGrid'
}
</script>
<template>
  <div class="sample-image-grid">
    <div class="image-grid-container">
      <h2>Try a demo image</h2>
      <ul>
        <li><img @click="sendImageSrc" src="@/assets/sample-images/01.png" alt="" /></li>
        <li><img @click="sendImageSrc" src="@/assets/sample-images/02.png" alt="" /></li>
        <li><img @click="sendImageSrc" src="@/assets/sample-images/03.png" alt="" /></li>
        <li><img @click="sendImageSrc" src="@/assets/sample-images/04.png" alt="" /></li>
        <li><img @click="sendImageSrc" src="@/assets/sample-images/05.png" alt="" /></li>
        <li><img @click="sendImageSrc" src="@/assets/sample-images/06.png" alt="" /></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
div.sample-image-grid {

  @apply p-6;

  div.image-grid-container {
    h2 {
      @apply text-2xl text-center mb-4;
    }
    ul {
      @apply grid grid-cols-3 gap-2;
      li {
        @apply border border-slate-700;
      }
    }
  }
}
</style>
