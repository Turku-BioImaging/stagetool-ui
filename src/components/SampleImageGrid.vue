<script setup lang="ts">
const emit = defineEmits(['imageSelected'])

const sendImageSrc = (event: Event) => {
  emit('imageSelected', (event.target as HTMLImageElement).src)
}
</script>
<script lang="ts">
export default {
  name: 'SampleImageGrid'
}
</script>
<template>
  <div class="sample-image-grid">
    <div class="container mx-auto">
      <div class="image-grid">
        <h2>Try StageTool</h2>
        <p >
          Choose one of the demo images to see how StageTool works. The selected image is sent to a
          server for artificial intelligence prediction using the StageTool tubule and cell models.
          The results will be shown in a separate page.
        </p>
        <ul class="mt-8">
          <li><img @click="sendImageSrc" src="@/assets/sample-images/01.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/02.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/03.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/04.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/05.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/06.png" alt="" /></li>
        </ul>
        <p class="mt-6 text-sm italic">Compute resources for this demo are provided by the <a href="https://csc.fi/en/" target="_blank">Centre for Scientific Computing</a>.</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.sample-image-grid {
  // @apply p-6;

  div.image-grid {
    @screen lg {
      @apply w-3/4 mx-auto py-12;
    }

    h2 {
      // @apply text-center text-cyan-500 text-3xl;
      @apply font-semibold uppercase tracking-widest text-3xl;
    }
    ul {
      @apply grid grid-cols-6 gap-4;
      li {
        @apply border border-slate-700;

        &:hover {
          @apply border-rose-500 border-4;
        }
      }
    }
  }

  // @screen lg {
  //   div.image-grid-container {
  //     @apply w-2/3 mx-auto my-16;
  //   }
  // }
}
</style>
