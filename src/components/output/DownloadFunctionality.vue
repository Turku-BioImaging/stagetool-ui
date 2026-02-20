<!-- This is the description for the user on how to download the resulting results.json. The download functionality for the image is in the a-tag in VisualizationViewer.vue. --> 

<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()

let resSrc = computed(() => store.task?.resultsJSON[0])
let len = store.task?.visualization_sources?.length ?? 0
</script>

<script lang="ts">
export default {
  name: 'DownloadFunctionality'
}
</script>
<template>
  <div class="download-component" v-if="len > 1" >
    <p>
      Click on an resulting image to download it.
    </p>
    <p>
      <a download="results.json" :href=resSrc>
        Click here to download all the resulting Tubule data as a json.<br />
      </a>
      To show the Tubule data below, click on the original image.
    </p>
  </div>
</template>