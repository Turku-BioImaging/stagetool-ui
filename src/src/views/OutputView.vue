<script setup lang="ts">
import { ref, onMounted, onBeforeMount, watch } from 'vue'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'
import { TaskStatus } from '../classes/TaskStatus'
import { Task } from '../classes/Task'
import ImageSelector from '../components/output/ImageSelector.vue'
import VisualizationViewer from '../components/output/VisualizationViewer.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { task: storeTask, setTask } = useTaskStore()

let task = ref<Task | null>(null)

onBeforeMount(async () => {
  // read the task id from the path
  const taskId = router.currentRoute.value.params.id
  try {
    let fetchedTask = await StageToolClient.getTask(taskId.toString())
    await fetchedTask.populate()
    await fetchedTask.getImages()
    await fetchedTask.getVisualizations()
    task.value = fetchedTask
    setTask(fetchedTask)
  } catch (error) {
    console.error('Error fetching task:', error)
  }
})
</script>
<template>
  <div class="output-view">
    <section class="image-selector">
      <ImageSelector v-if="task?.image_sources" />
    </section>
    <section class="vis-viewer-section mt-4"><VisualizationViewer /></section>
    <section class="tubule-classifications">tubule classifications</section>
    <section class="tubule-data">tubule data</section>
    <section class="downloads-section">downloads section</section>
  </div>
</template>

<style scoped>
/* Your component styles here */
</style>
