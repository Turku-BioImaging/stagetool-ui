<template>
  <section class="abstract-section">
    <div class="container mx-auto">
      <!-- <h2 class="abstract-subtitle">Abstract</h2> -->
      <!-- <p class="abstract-paragraph">
        Spermatogenesis is a complex differentiation process that takes place in the seminiferous
        tubules. A specific organization of spermatogenic cells within the seminiferous epithelium
        enables a synchronous progress of germ cells at certain steps of differentiation on the
        spermatogenic pathway. This can be observed in testis cross-sections where seminiferous
        tubules can be classified into distinct stages of constant cellular composition (12 stages
        in the mouse). For a detailed analysis of spermatogenesis, these stages have to be
        individually observed from testis cross-sections. However, the recognition of stages
        requires special training and expertise. Furthermore, the manual scoring is laborious
        considering the high number of tubule cross-sections that have to be analyzed. To facilitate
        the analysis of spermatogenesis, we have developed a convolutional deep neural network-based
        approach named “STAGETOOL.” STAGETOOL analyses histological images of
        4′,6-diamidine-2′-phenylindole dihydrochloride (DAPI)-stained mouse testis cross-sections at
        ×400 magnification, and very accurately classifies tubule cross-sections into 5 stage
        classes and cells into 9 categories. STAGETOOL classification accuracy for stage classes of
        seminiferous tubules of a whole-testis cross-section is 99.1%. For cellular level analysis
        the F1 score for 9 seminiferous epithelial cell types ranges from 0.80 to 0.98. Furthermore,
        we show that STAGETOOL can be applied for the analysis of knockout mouse models with
        spermatogenic defects, as well as for automated profiling of protein expression patterns.
        STAGETOOL is the first fluorescent labeling–based automated method for mouse testis
        histological analysis that enables both stage and cell-type recognition. While STAGETOOL
        qualitatively parallels an experienced human histologist, it outperforms humans time-wise,
        therefore representing a major advancement in male reproductive biology research.
      </p> -->
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
          <img src="@/assets/sample-images/whole_testis_tubular_level_analysis.jpeg" alt="" />
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
      @apply text-2xl text-slate-900 font-semibold;
      @apply w-3/4 mx-auto;
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
