<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'CitationInfo'
}
</script>
<template>
  <div class="citation-info">
    <div class="container mx-auto">
      <div class="w-3/4 mx-auto">
        <h2>Citation</h2>
        <p class="mb-6">
          When using this tool for publication purposes, please acknowledge the developers by
          including the following citation:
        </p>
        <blockquote>
          <p>
            Meikar, O., Majoral, D., Heikkinen, O., Valkama, E., Leskinen, S., Rebane, A.,
            Ruusuvuori, P., Toppari, J., Mäkelä, J. A., & Kotaja, N. (2022). STAGETOOL, a Novel
            Automated Approach for Mouse Testis Histological Analysis. Endocrinology, 164(2),
            bqac202. https://doi.org/10.1210/endocr/bqac202
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.citation-info {
  @apply py-16;
  @apply bg-slate-100;

  h2 {
    @apply text-3xl font-semibold tracking-widest uppercase;
    @apply mb-8;
  }

  blockquote {
    @apply border-l-4 border-rose-500 pl-4 text-xl font-light;
  }

}
</style>
