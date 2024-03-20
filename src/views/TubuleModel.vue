<template>
  <div class="tubule-model-page">
    <h1>Tubule Model</h1>
    <div class="tubule-stages">
      <ul>
        <li>
          <img src="~@/assets/tubule-stages/1.jpg" alt="" />
          <p>Stages I-V</p>
        </li>
        <li>
          <img src="~@/assets/tubule-stages/2_5.jpg" alt="" />
          <p>Stages VI-VIII</p>
        </li>
        <li>
          <img src="~@/assets/tubule-stages/9_early.png" alt="" />
          <p>Stages IX</p>
        </li>
        <li>
          <img src="~@/assets/tubule-stages/10_11.png" alt="" />
          <p>Stages X-XI</p>
        </li>
        <li>
          <img src="~@/assets/tubule-stages/12.png" alt="" />
          <p>Stages XII</p>
        </li>
      </ul>
      <div class="tubule-description">
        <p>
          The mouse seminiferous epithelial cycle can be divided into 12 (I-XII) stages. StageTool
          is able to classify a DAPI-stained seminiferous tubule into five categories: I-V, VI-VIII,
          IX, X-XI, and XII. For more information, see
          <a href="https://pubmed.ncbi.nlm.nih.gov/22992924/" target="_blank"
            >Meistrich and Hess, 2013</a
          >
          and
          <a href="https://pubmed.ncbi.nlm.nih.gov/33104058/" target="_blank">Mäkelä et al. 2020</a
          >.
        </p>
        <p>
          The development of the cell and tubule models which together comprise StageTool has been
          described in <a href="" target="_blank">Meikar, Majoral et al. 2022</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
div.tubule-model-page {
  @apply px-4;

  h1 {
    @apply uppercase text-2xl font-semibold text-center;
  }

  div.tubule-stages {
    @apply mt-8;
    ul {
      @apply flex flex-wrap justify-center;
      li {
        @apply w-1/2;
        cursor: pointer;

        img {
          @apply w-full h-36;
          object-fit: contain;
        }

        p {
          @apply text-center text-cyan-400;
        }
      }

      li:not(:last-child) {
        @apply mb-4;
      }
    }
  }

  div.tubule-description {
    @apply py-8;
  }
}
</style>
