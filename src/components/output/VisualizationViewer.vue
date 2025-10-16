<script setup lang="ts">
import { ref, onMounted, watch, computed, inject } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()

let visImgSrc = computed(() => store.task?.visualization_sources?.[store.selectedImageIndex])
</script>

<script lang="ts">
export default {
  name: 'VisualizationViewer'
}
</script>

<template>
  <div class="vis-viewer-component">
    <a download="result.png" :href=visImgSrc>
      <img :src="visImgSrc" alt="" />
    </a>
  </div>
</template>
