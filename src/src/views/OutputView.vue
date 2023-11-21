<script setup lang="ts">
import { inject } from 'vue'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'
import { TaskStatus } from '../classes/TaskStatus'
import { Task } from '../classes/Task'
import ImageSelector from '../components/output/ImageSelector.vue'
import VisualizationViewer from '../components/output/VisualizationViewer.vue'
import TubuleClassification from '../components/output/TubuleClassification.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useTaskStore()
</script>
<template>
  <div class="output-view">
    <section class="image-selector">
      <ImageSelector v-if="store.task && store.task.image_sources" />
    </section>
    <section class="vis-viewer-section mt-4">
      <VisualizationViewer v-if="store.task && store.task.visualization_sources" />
    </section>

    <section class="tubule-classifications mt-4">
      <TubuleClassification v-if="store.task && store.task.results" />
    </section>
    <section class="tubule-data">tubule data</section>
    <section class="downloads-section">downloads section</section>
  </div>
</template>

<style scoped>
/* Your component styles here */
</style>
