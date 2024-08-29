<template>
  <section class="intro-section">
    <div class="jumbotron">
      <h1 class="title-text">StageTool</h1>
      <h2 class="subtitle-text">
        An automated approach for identification of mouse seminiferous epithelial cell types and
        stages based on fluorescent chromatin labeling.
      </h2>
    </div>
    <div class="organization-array">
      <div>
        <img src="@/assets/logos/university_of_tartu.svg" alt="University of Tartu" />
      </div>
      <div><img src="@/assets/logos/UTU_logo_EN_RGB.png" alt="University of Turku" /></div>
      <div>
        <img src="@/assets/logos/turku_bioimaging_dark_horizontal.png" alt="Turku BioImaging" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HomeIntroSection'
}
</script>

<style lang="scss" scoped>
section.intro-section {
  position: relative;
  @apply py-12 h-full flex flex-col justify-center;

  &::before {
    content: '';
    background-image: url('/images/home_bg_magma.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.1;
    top: -30rem;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  @screen lg {
    min-height: 35vh;
  }

  div.jumbotron {
    h1.title-text {
      @apply text-4xl text-slate-700 text-center;
      @apply pb-8;
      @apply uppercase tracking-widest font-semibold;

      @screen lg {
        @apply text-6xl;
      }
    }

    h2.subtitle-text {
      @apply text-2xl text-center text-slate-900 font-light;

      @screen lg {
        @apply text-2xl w-1/3 mx-auto;
      }
    }
  }

  div.organization-array {
    @apply text-center flex justify-center align-middle;
    @apply pt-12;

    img {
      @apply mx-4 h-20 w-auto;
    }
  }
}
</style>
