<template>
  <footer class="default-footer">
    <div class="container mx-auto">
      <div class="content-div">
        <div class="link-list">
          <h3 class="footer-subtitle">Home</h3>
          <ul>
            <li><a href="">What is StageTool?</a></li>
            <li><a href="">Cell Model</a></li>
            <li><a href="">Tubule Model</a></li>
            <li><a href="">Troubleshooting</a></li>
            <li><a href="">Developers &amp; Funding</a></li>
          </ul>
        </div>
        <div class="devs-list">
          <h3 class="footer-subtitle">Developers</h3>
          <ul>
            <li>Oliver Meikar, PhD</li>
            <li>Daniel Majoral, PhD</li>
            <li>Olli Heikkinen, BMed</li>
            <li>Sini Leskinen, BMed</li>
            <li>Asst. Prof. Pekka Ruusuvuori, PhD</li>
            <li>Juho-Anti Mäkelä, PhD</li>
            <li>Professor Noora Kotaja, PhD</li>
            <li><br /></li>
            <li>Pasi Kankaanpää, PhD</li>
            <li>Junel Solis, MD, MSc</li>
            <li>Dado Tokic, MSc</li>
          </ul>

          <h3 class="footer-subtitle mt-12">Funding</h3>
          <ul>
            <li>Research Council of Finland</li>
            <li>Sigrid Jusélius Foundation</li>
            <li>Estonian Research Council</li>
            <li>Novo Nordisk Foundation</li>
            <li>Jalmari and Rauha Ahokas Foundation</li>
          </ul>
        </div>
        <div class="org-list">
          <h3 class="footer-subtitle">Organizations</h3>
          <div class="org-item">
            <img src="@/assets/logos/university_of_tartu.svg" alt="" />
            <p>
              Institute of Biomedicine and Translational Medicine<br />&amp; Institute of Computer
              Science<br />University of Tartu, Tartu, Estonia
            </p>
          </div>
          <div class="org-item">
            <img class="utu-logo" src="@/assets/logos/UTU_logo_EN_RGB.png" alt="" />
            <p>
              Institute of Biomedicine<br />Integrative Physiology and Pharmacology Unit<br />University
              of Turku, Turku, Finland
            </p>
          </div>
          <div class="org-item">
            <img src="@/assets/logos/turku_bioimaging_dark_horizontal.jpg" alt="Turku BioImaging" />
            <p>
              A broad-based interdisciplinary science and infrastructure umbrella jointly operated
              by Åbo Akademi University and the University of Turku.<br />Turku, Finland
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterDefault'
}
</script>

<style lang="scss" scoped>
footer.default-footer {
  @apply bg-slate-400 py-16;
  @apply text-slate-700;

  a {
    @apply text-slate-700 hover:text-slate-900;
  }

  h3.footer-subtitle {
    @apply text-lg font-semibold tracking-widest uppercase text-slate-900;
  }

  div.content-div {
    @screen lg {
      @apply grid grid-cols-3 gap-8 mx-auto w-3/4;
    }

    div.link-list {
    }

    div.org-list {
      div.org-item {
        img {
          @apply h-24 w-auto;
        }

        img.utu-logo {
          position: relative;
          left: -25px;
          object-fit: cover;
        }

        p {
          @screen lg {
            max-width: 25rem;
          }
        }
      }

      div.org-item:not(:first-child) {
        @apply mt-8;
      }
    }
  }
}
</style>
