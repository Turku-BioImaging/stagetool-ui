<template>
  <overlay-info>
    <h1>Stages I-V</h1>
    <div class="image-div">
      <ul>
        <li>
          <img src="~@/assets/tubule-stages/1.jpg" alt="" />
          <p>Stage I</p>
        </li>
        <li>
          <img src="~@/assets/tubule-stages/2_5.jpg" alt="" />
          <p>Stage II-V</p>
        </li>
      </ul>
    </div>
    <div class="mt-6">
      <h2>Criteria</h2>
      <p>
        Presence of Spg, pachytene Spc, RS and late condensed elSpt which are bundles. Pachytene Spc
        are relatively small (I-IV) but gradually grow in size towards Stage V.
      </p>
    </div>
  </overlay-info>
</template>
<script lang="ts">
import OverlayInfo from '../OverlayInfo.vue'
export default {
  components: {
    OverlayInfo
  }
}
</script>
