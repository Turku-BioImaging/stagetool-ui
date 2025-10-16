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
  <div class="vis-viewer-component" style="display: inline-block">
    <a download="result.png" :href=visImgSrc style="width: 100%">
      <img :src="visImgSrc" alt="" />
    </a>
  </div>
</template>
