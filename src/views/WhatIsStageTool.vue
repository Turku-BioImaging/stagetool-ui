<template>
  <div class="what-is-stagetool">
    <h1>What is StageTool?</h1>
    <p>
      StageTool is the first automated approach for identification of mouse seminiferous epithelial
      cell types and stages based on fluorescent chromatin labeling. STAGETOOL automatically
      classifies the cell types of the mouse seminiferous epithelium to nine distinct categories and
      epithelial stages (I-XII) to five distinct categories.
    </p>
    <p>The cell categories recognized by StageTool are:</p>
    <ul>
      <li>Sertoli cells (Sert)</li>
      <li>Spermatogonia (Spg), including typeA, intermediate and type B spermatogonia.</li>
      <li>
        Early primary spermatocytes (Spc-prePach), including preleptotene, leptotene and zygotene
        spermatocytes.
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

    <p>
      Mouse seminiferous epithelial cycle can be divided into 12 (I-XII) stages. For more
      information see <a href="">Meistrich and Hess, 2013</a> and <a href="">Mäkelä et al. 2020</a>.
      StageTool is able to classify a DAPI-stained seminiferous tubule into five categories: I-V,
      VI-VIII, IX, X-XI, and XII. The development of the cell and tubule models which together
      comprise StageTool has been described in <a href="">Meikar, Majoral et al. 2022</a>.
    </p>

    <h2>Applications</h2>
    <p>
      Spermatogenesis research, testicular phenotyping, toxicology, study of impaired
      spermatogenesis, spermatogenic arrest, expression analysis…
    </p>
    <h2>Limitations</h2>
    <p>
      STAGETOOL has been trained and validated on data derived from the mouse testis and therefore
      performs optimally only on images of mouse seminiferous tubule cross-sections. Given the
      conservation of cytological features in distinct germ cell types across species, the cell
      model may provide useful data also on images from other mammalian species (such as rat and
      human), but stage identification cannot be used in that context. STAGETOOL performs well even
      on cross-sections from with a spermtogenic defect (such as haploid block or impaired
      morphogenesis of spermatid head). However, if spermtogenesis is severely affected, the data
      produced by STAGETOOL should be interpreted with caution.
    </p>
    <p>
      For optimal performance, make sure your image is of correct size (1024x1024 pixels), not
      overexposed (the number of saturated pixels should be kept x%) and representing xx% of any
      single tubule cross-section. It is critically importnt to use ⨯400 magnification (10⨯ ocular
      plus 40⨯ objective). Also, use of transverse sections and avoid longitudinal sections because
      they might host more than one stage.
    </p>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
div.what-is-stagetool {
  @apply px-4 pb-12;

  h1 {
    @apply mb-4 font-semibold text-xl;
  }

  h2 {
    @apply mb-2 font-semibold text-lg;
  }

  p {
    @apply mb-4;
  }

  ul {
    @apply ml-6;
    list-style-type: square;
  }
}
</style>
