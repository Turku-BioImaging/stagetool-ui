<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'CitationInfo'
}
</script>
<template>
  <div class="citation-info">
    <div>
      <h2 class="text-2xl mb-4 text-center">Citation</h2>
      <p>
        When using this tool for publication purposes, please acknowledge the developers by
        including the following citation:
      </p>
      <blockquote class="mt-6">
        <p>
          Meikar, O., Majoral, D., Heikkinen, O., Valkama, E., Leskinen, S., Rebane, A., Ruusuvuori,
          P., Toppari, J., Mäkelä, J. A., & Kotaja, N. (2022). STAGETOOL, a Novel Automated Approach
          for Mouse Testis Histological Analysis. Endocrinology, 164(2), bqac202.
          https://doi.org/10.1210/endocr/bqac202
        </p>
      </blockquote>
      <!-- <p class='text-lg text-center text-cyan-300 mt-6'>More citation options</p> -->
    </div>
  </div>
</template>
<style lang="scss">
div.citation-info {
  @apply p-6;
  @apply bg-slate-800;

  blockquote {
    @apply border-l-4 border-cyan-400 pl-4;
  }

  @screen lg {
    & > div {
      @apply w-2/3 mx-auto my-16;
    }
  }
}
</style>
