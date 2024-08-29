<template>
  <div class="models-page">
    <div class="container mx-auto">
      <div class="content-div">
        <div>
          <h2>Tubule Model</h2>
          <p>
            The mouse seminiferous epithelial cycle can be divided into 12 (I-XII) stages. StageTool
            is able to classify a DAPI-stained seminiferous tubule into five categories: I-V,
            VI-VIII, IX, X-XI, and XII. For more information, see
            <a href="https://pubmed.ncbi.nlm.nih.gov/22992924/" target="_blank"
              >Meistrich and Hess, 2013</a
            >
            and
            <a href="https://pubmed.ncbi.nlm.nih.gov/33104058/" target="_blank"
              >Mäkelä et al. 2020</a
            >. The development of the cell and tubule models which together comprise StageTool has
            been described in
            <a href="http://localhost:5173/tubule-model" taget="_blank"
              >Meikar, Majoral et al. 2022</a
            >.
          </p>
          <div class="tubule-grid">
            <div class="tubule-item">
              <img src="~@/assets/tubule-stages/1.jpg" alt="" />
              <p>I-V</p>
            </div>
            <div class="tubule-item">
              <img src="~@/assets/tubule-stages/7_8.png" alt="" />
              <p>VI-VIII</p>
            </div>
            <div class="tubule-item">
              <img src="~@/assets/tubule-stages/9.png" alt="" />
              <p>IX</p>
            </div>
            <div class="tubule-item">
              <img src="~@/assets/tubule-stages/10_11.png" alt="" />
              <p>X-XI</p>
            </div>
            <div class="tubule-item">
              <img src="~@/assets/tubule-stages/12.png" alt="" />
              <p>XII</p>
            </div>
          </div>
        </div>
        <div class="mt-24">
          <h2>Cell Model</h2>
          <p>StageTool is designed to recognize several cell categories.</p>

          <table class="cells-table">
            <tbody>
              <tr>
                <td><img src="~@/assets/cell-images/1.png" alt="Sert" class="w-auto" /></td>
                <td>Sertoli cells (Sert)</td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/2.png" alt="Spg" class="w-auto" /></td>
                <td>
                  Spermatogonia (Spg), including type A, intermediate, and type B spermatogonia.
                </td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/3.png" alt="Spc-prePach" class="w-auto" /></td>
                <td>
                  Early primary spermatocytes (Spc-prePach), including preleptotene, leptotene, and
                  zygotene spermatocytes
                </td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/4.png" alt="Spc-Pach" class="w-auto" /></td>
                <td>Mid-to-late primary spermatocytes (Spc-Pach)</td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/5.png" alt="m2m" class="w-auto" /></td>
                <td>Meiotic divisions (m2m)</td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/6.png" alt="Spc-sec" class="w-auto" /></td>
                <td>Secondary spermatocytes (Spc-sec)</td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/7.png" alt="RS" class="w-auto" /></td>
                <td>Round spermatids (RS)</td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/8.png" alt="elSpt-early" class="w-auto" /></td>
                <td>Early elongating spermatids (elSpt-early)</td>
              </tr>
              <tr>
                <td><img src="~@/assets/cell-images/9.png" alt="elSpt-late" class="w-auto" /></td>
                <td>Late elongating spermatids (elSpt-late)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.models-page {
  @apply mt-24 mb-24;
  @apply flex flex-col justify-center;
  div.content-div {
    @screen lg {
      @apply w-3/4 mx-auto;
    }

    h2 {
      @apply uppercase text-2xl font-semibold tracking-widest;
    }

    div.tubule-grid {
      @apply grid grid-cols-3 gap-x-6 gap-y-12 mt-12;
      img {
        @apply h-64 w-full object-cover;
      }
      p {
        @apply text-center text-lg font-semibold tracking-widest;
      }
      @screen lg {
        @apply grid;
      }
    }

    table.cells-table {
        img {
            @apply h-32 w-auto;
        }
    }
  }
}
</style>
<script lang="ts"></script>
<script setup lang="ts"></script>
