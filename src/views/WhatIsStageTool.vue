<template>
  <div class="what-is-stagetool-page">
    <div class="container mx-auto">
      <div class="content-div">
        <h1>What is StageTool?</h1>
        <p>
          StageTool is the first automated approach for identification of mouse seminiferous
          epithelial cell types and stages based on fluorescent chromatin labeling. STAGETOOL
          automatically classifies the cell types of the mouse seminiferous epithelium to nine
          distinct categories and epithelial stages (I-XII) to five distinct categories.
        </p>
        <p class="mt-12">The cell categories recognized by StageTool are:</p>
        <ul>
          <li>Sertoli cells (Sert)</li>
          <li>Spermatogonia (Spg), including typeA, intermediate and type B spermatogonia.</li>
          <li>
            Early primary spermatocytes (Spc-prePach), including preleptotene, leptotene and
            zygotene spermatocytes.
          </li>
          <li>
            Mid-to-late primary spermatocytes (Spc-Pach), including pachytene and diplotene
            spermatocytes.
          </li>
          <li>Meiotic divisions (m2m)</li>
          <li>Secondary spermatocytes (Spc-sec)</li>
          <li>Round spermatids (RS)</li>
          <li>Early elongating spermatids (elSpt-early)</li>
          <li>Late elongating spermatids (elSpt-late)</li>
        </ul>

        <p class="mt-12">
          Mouse seminiferous epithelial cycle can be divided into 12 (I-XII) stages. For more
          information see <a href="">Meistrich and Hess, 2013</a> and
          <a href="">Mäkelä et al. 2020</a>. StageTool is able to classify a DAPI-stained
          seminiferous tubule into five categories: I-V, VI-VIII, IX, X-XI, and XII. The development
          of the cell and tubule models which together comprise StageTool has been described in
          <a href="">Meikar, Majoral et al. 2022</a>.
        </p>

        <h2 class="mt-16">Applications</h2>
        <p>
          Spermatogenesis research, testicular phenotyping, toxicology, study of impaired
          spermatogenesis, spermatogenic arrest, expression analysis…
        </p>
        <h2 class="mt-16">Limitations</h2>
        <p>
          STAGETOOL has been trained and validated on data derived from the mouse testis and
          therefore performs optimally only on images of mouse seminiferous tubule cross-sections.
          Given the conservation of cytological features in distinct germ cell types across species,
          the cell model may provide useful data also on images from other mammalian species (such
          as rat and human), but stage identification cannot be used in that context. STAGETOOL
          performs well even on cross-sections from with a spermtogenic defect (such as haploid
          block or impaired morphogenesis of spermatid head). However, if spermtogenesis is severely
          affected, the data produced by STAGETOOL should be interpreted with caution.
        </p>
        <p class="mt-6">
          For optimal performance, make sure your image is of correct size (1024x1024 pixels), not
          overexposed (the number of saturated pixels should be kept x%) and representing xx% of any
          single tubule cross-section. It is critically importnt to use ⨯400 magnification (10⨯
          ocular plus 40⨯ objective). Also, use of transverse sections and avoid longitudinal
          sections because they might host more than one stage.
        </p>
        <p class="mt-6">
          Despite very high performance, StageTool occasionally makes mistakes. The most common
          mistakes are:
        </p>

        <ul class="troubleshooting-list">
          <li>
            <span>Spc-Prepach vs. Spg.</span>Preleptotene spermatocytes vs. spermatogonia. Drawing a
            distinction between these two cell types may sometimes be very challenging.
          </li>
          <li>
            <span>El-Spt-early vs. El-Spt-late.</span>Early vs. late elongating spermatids. The
            former gradually develop into the latter.
          </li>
          <li>
            <span>Sert vs. RS.</span>Sertuli cells vs. round spermatids. In DAPI staining these two
            cell types sometimes look very similar but their localization within the epithelium is
            distinct and Sertoli cell nuclei are typically close to the basement membrane.
          </li>
          <li>
            <span>Stages I-V vs. VI-VIII.</span>Stages V-VI are very similar and might sometimes
            fall into either stage category.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
div.what-is-stagetool-page {
  @apply my-24;

  div.content-div {
    @screen lg {
      @apply w-3/4 mx-auto;
    }

    h1,
    h2 {
      @apply uppercase tracking-widest font-semibold text-2xl;
    }

    ul.troubleshooting-list {
      li {
        list-style-type: square;
        margin-left: 1.5rem;
      }
    }
  }
}
</style>
<script setup lang="ts"></script>
<script lang="ts"></script>
