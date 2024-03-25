<template>
  <div class="cell-model-page">
    <div class="cell-model-images">
      <p class="font-bold">Cell categories recognized by STAGETOOL are:</p>
      <div class="h-10"></div>
      <div class="cell-images-list grid gap-x-6 gap-y-12 grid-cols-1">
        <div>
          <p>Sertoli cells (Sert)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/1.png" alt="Sert" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Spermatogonia (Spg), including type A, intermediate, and type B spermatogonia.</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/2.png" alt="Spg" class="w-auto" />
          </div>
        </div>
        <div>
          <p>
            Early primary spermatocytes (Spc-prePach), including preleptotene, leptotene, and
            zygotene spermatocytes
          </p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/3.png" alt="Spc-prePach" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Mid-to-late primary spermatocytes (Spc-Pach)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/4.png" alt="Spc-Pach" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Meiotic divisions (m2m)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/5.png" alt="m2m" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Secondary spermatocytes (Spc-sec)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/6.png" alt="Spc-sec" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Round spermatids (RS)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/7.png" alt="RS" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Early elongating spermatids (elSpt-early)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/8.png" alt="elSpt-early" class="w-auto" />
          </div>
        </div>
        <div>
          <p>Late elongating spermatids (elSpt-late)</p>
          <div class="h-4"></div>
          <div class="flex justify-center">
            <img src="~@/assets/cell-images/9.png" alt="elSpt-late" class="w-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
div.cell-model-page {
  @apply px-4;
  height: 100%;

}
</style>
