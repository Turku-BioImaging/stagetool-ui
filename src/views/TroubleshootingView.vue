<script lang="ts">
export default {}
</script>
<template>
  <div class="troubleshooting-view">
    <h1 class="text-cyan-400 font-semibold uppercase text-xl">Troubleshooting</h1>
    <p>
        Despite very high performance, StageTool occasionally makes mistakes. The most common mistakes are:<br><br>
        <ul>
            <li><span>Spc-Prepach vs. Spg.</span>Preleptotene spermatocytes vs. spermatogonia. Drawing a distinction between these two cell types may sometimes be very challenging.</li>
            <li><span>El-Spt-early vs. El-Spt-late.</span>Early vs. late elongating spermatids. The former gradually develop into the latter.</li>
            <li><span>Sert vs. RS.</span>Sertuli cells vs. round spermatids. In DAPI staining these two cell types sometimes look very similar but their localization within the epithelium is distinct and Sertoli cell nuclei are typically close to the basement membrane.</li>
            <li><span>Stages I-V vs. VI-VIII.</span>Stages V-VI are very similar and might sometimes fall into either stage category.</li>
        </ul>
    </p>
    <!-- <p class="mt-8">Contact <a href="mailto:stagetool@utu.fi">stagetool@utu.fi</a></p> -->
  </div>
</template>
<style lang="scss">
div.troubleshooting-view {
  @apply mt-12 px-4;

  ul {
    margin-left: 1.5rem;

    li {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -1.5rem;
        top: 0.65rem;
        width: 0.5rem;
        height: 0.5rem;
        // background-color: cyan;
        @apply bg-cyan-400;
      }
    }
    
  }
}
</style>
