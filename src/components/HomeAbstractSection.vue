<template>
  <section class="abstract-section">
    <div class="container mx-auto">
      <h2 class="abstract-subtitle">How StageTool works</h2>
      <div class="stagetool-scheme">
        <img src="@/assets/sample-images/stagetool_scheme.jpg" alt="StageTool scheme" />
        <p>
          <em>Figure 1. </em>STAGETOOL scheme: A whole-testis DAPI-stained cross-section image was
          sliced into a collection of 1024 × 1024 images. Then each image in the collection went
          through 2 different neural network models: cell and tubule model. The cell model detected
          and classified the seminiferous epithelial cells into 9 different cell types. The tubule
          model detected, segmented, and classified tubules into 5 developmental stage categories.
          Finally, the whole-testis cross-section was composed again including all the tubule and
          cell information.
        </p>
      </div>
      <div class="two-column-content">
        <div class="left-column">
          <img src="@/assets/sample-images/whole_testis_tubular_level_analysis.jpeg" alt="" />
          <p>
            <em>Figure 2. </em>Whole-testis tubular level analysis. A, A whole-testis cross-section
            with STAGETOOL-derived staging data; white dotted rectangles are shown as higher
            magnification insets in B to D. B, An example of a borderline stage V to VI tubule
            (asterisk, tubule 58). C, Tubule 30 (asterisk) is a longitudinal cross-section of a
            tubule in which the left and middle part are in stage I to V, whereas the right corner
            represents stage XII. D, Tubule 15 (asterisk) shows the only actual conflict between
            human annotation and computer prediction. Human annotation, if in conflict with the
            computer prediction, is shown in red. A high-resolution image of the same whole-testis
            cross-section analysis with cellular and tubular labels is provided online
            (https://dx.doi.org/10.21227/em1y-9j15)
          </p>
        </div>
        <div class="right-column">
          <img src="@/assets/sample-images/stagetool_robustness.jpeg" alt="" />
          <p>
            <em>Figure 3. </em>STAGETOOL output images for A and B, Miwi knockout (KO) and C, Spef2
            KO mouse seminiferous tubule cross-sections. Two representative examples of STAGETOOL
            output for Miwi KO seminiferous tubules at stages A, I to V and XII, and B, X and XI.
            Despite the lack of elongating spermatids, STAGETOOL correctly recognized the stages and
            cell types therein. C, A representative example of STAGETOOL output for low-resolution
            and over-exposed Spef2 KO seminiferous tubules at stage IX.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HomeAbstractSection'
  // Your component's JavaScript logic goes here
}
</script>

<style scoped lang="scss">
section.abstract-section {
  @apply bg-white;
  @screen lg {
    @apply py-24;
  }
  h2.abstract-subtitle {
    @screen lg {
      @apply text-3xl text-slate-900 font-semibold tracking-widest uppercase;
      @apply w-3/4 mx-auto mb-16;
    }
  }
  p.abstract-paragraph {
    @apply text-xl;
    @screen lg {
      @apply w-full mx-auto;
    }
  }

  div.stagetool-scheme {
    @screen lg {
      @apply w-3/4 mx-auto;
    }
  }

  div.two-column-content {
    @apply mt-16;
    @screen lg {
      @apply grid grid-cols-2 gap-8 w-3/4 mx-auto;
      & > div {
        & > img {
          @apply w-full;
        }
      }
    }
  }
}
</style>
