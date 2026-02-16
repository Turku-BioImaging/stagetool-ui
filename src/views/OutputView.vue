<script setup lang="ts">
import { inject,computed } from 'vue'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'
import { Task } from '../classes/Task'
import ImageSelector from '../components/output/ImageSelector.vue'
import VisualizationViewer from '../components/output/VisualizationViewer.vue'
import TubuleClassification from '../components/output/TubuleClassification.vue'
import TubuleDataTable from '../components/output/TubuleDataTable.vue'
import DownloadFunctionality from '../components/output/DownloadFunctionality.vue'
import ErrorMessageViewer from '@/components/output/ErrorMessageViewer.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useTaskStore()

/* const valid = computed(() => {
  if (store.task?.visualization_sources && (store.task?.visualization_sources?.length < store.task?.image_filenames?.length*2)) {
    return false
    }
  return true
  }) */


</script>
<template>
  <div class="h-16 ..."></div>
  <div class="output-view">
    <section class="downloads-section">
      <DownloadFunctionality v-if="store.task && store.task.results" />
    </section>
    <section class="image-selector">
      <ImageSelector />
    </section>
    <section class="vis-viewer-section mt-4">
      <VisualizationViewer v-if="store.task && store.task.visualization_sources" />
    </section>
    <section class="tubule-classifications mt-4">
      <TubuleClassification v-if="store.task && store.task.results" />
    </section>
    <section class="tubule-data-tables mt-4">
      <TubuleDataTable v-if="store.task && store.task.results" />
    </section>
  </div>
  <!-- <div class="output-view" v-else>
    <section class="errormessage-viewer-component">
      <ErrorMessageViewer v-if="store.task && store.task.image_sources" />
    </section>
  </div> -->
</template>

<style lang='scss'>
div.output-view {
  @apply p-3;
}


</style>
