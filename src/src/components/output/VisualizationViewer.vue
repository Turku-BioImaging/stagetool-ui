<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useTaskStore } from '../../stores/task'
import { Task } from '../../classes/Task'

const { task: storeTask, setTask, selectedVisualization } = useTaskStore()

let selectedVis = ref<number | null>(null)
let task = ref<Task | null>(null)
let visSources = computed(() => task?.value?.visualization_sources || [])

let visImgSrc = computed(() => {
  if (visSources.value && selectedVis.value !== null) {
    return visSources.value[selectedVis.value]
  }
  return null
})

onMounted(() => {
  task.value = storeTask
  selectedVis.value = selectedVisualization
})
</script>
<script lang="ts">
export default { name: 'VisualizationViewer' }
</script>
<template>
  <div class="vis-viewer-component"><img :src="visImgSrc" alt="" /></div>
</template>
