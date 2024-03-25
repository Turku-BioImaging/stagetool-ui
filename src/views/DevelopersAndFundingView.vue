<script lang="ts">
export default {}
</script>
<template>
  <div class="developers-and-funding-view">
    <div class="funding-div text-center">
      <h1>Funding</h1>
      <div>
        <ul>
          <li>Academy of Finland</li>
          <li>Sigrid Jusélius Foundation</li>
          <li>Estonian Research Council</li>
          <li>Novo Nordisk Foundation</li>
          <li>Jalmari and Rauha Ahokas Foundation</li>
        </ul>
      </div>
    </div>
    <div class="developers-div text-center">
      <h1>Developers</h1>
      <div>
        <ul>
          <li>Oliver Meikar, PhD</li>
          <li>Daniel Majoral, MSc</li>
          <li>Olli Heikkinen, BMed</li>
          <li>Sini Leskinen, BMed</li>
          <li>Asst. Prof. Pekka Ruusuvuori, PhD</li>
          <li>Juho-Anti Mäkelä, PhD</li>
          <li>Professor Noora Kotaja, PhD</li>
        </ul>
        <ul>
          <li>Pasi Kankaanpää, PhD</li>
          <li>Junel Solis, MD, MSc</li>
          <li>Dado Tokic, MSc</li>
        </ul>
      </div>
    </div>
    <div class="universities-div">
      <div>
        <a
          href="https://biomeditsiin.ut.ee/en/esileht-bio-ja-siirdemeditsiin-instituut"
          target="_blank"
        >
          <img
            src="~@/assets/logos/university_of_tartu.svg"
            class="h-36 w-auto"
            alt="Institute of Biomedicine and Translational Medicine, University of Tartu"
          />
          <p class="text-center">
            Institute of Biomedicine and Translational Medicine<br />& Institute of Computer
            Science<br />University of Tartu, Tartu, Estonia
          </p>
        </a>
      </div>
      <div class="mt-8">
        <a
          href="https://www.utu.fi/en/university/faculty-of-medicine/institute-of-biomedicine"
          target="_blank"
        >
          <img
            src="~@/assets/logos/UTU_logo_EN_RGB_white.png"
            class="h-32 w-auto"
            alt="Institute of Biomedicine, Integrative Physiology and Pharmacology Unit, University of Turkus"
          />
          <p class="text-center">
            Institute of Biomedicine, Integrative Physiology and Pharmacology Unit<br />University
            of Turku, Turku, Finland
          </p>
        </a>
      </div>
      <div class="mt-8">
        <a href="https://bioimaging.fi" target="_blank">
          <img
            src="~@/assets/logos/turku_bioimaging_dark_horizontal.jpg"
            class="p-4 h-32 w-auto"
            alt="Turku BioImaging"
          />
        </a>
        <p class="text-center">
          Broad-based interdisciplinary science and infrastructure umbrella. Jointly operated by Åbo
          Akademi University and the University of Turku.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
div.developers-and-funding-view {
  @apply px-4 pb-8;

  h1 {
    @apply text-cyan-500 uppercase text-2xl;
  }

  div.developers-div {
    @apply mt-12;
  }

  div.universities-div {
    @apply mt-12;
    img {
      @apply mx-auto;
    }
    p {
      @apply text-sm;
    }
  }
}
</style>
