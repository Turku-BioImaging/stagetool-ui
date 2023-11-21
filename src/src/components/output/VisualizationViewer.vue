<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useTaskStore } from '../../stores/task'
// import { Task } from '../../classes/Task'

const { task, setTask, selectedImageIndex } = useTaskStore()

let visImgSrc = computed(() => task.visualization_sources[selectedImageIndex])

watch(() => selectedImageIndex, () => {
  // visImgSrc.value = task.visualization_sources[selectedImageIndex]
  console.log(selectedImageIndex)
})


</script>

<template>
  <div class="vis-viewer-component"><img :src="visImgSrc" alt="" /></div>
</template>

