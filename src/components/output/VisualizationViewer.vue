<script setup lang="ts">
import { ref, onMounted, watch, computed, inject } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()

let visImgSrc = computed(() => store.task?.visualization_sources?.[store.selectedImageIndex])
let len = computed(() => store.task?.visualization_sources.length || 0 )
</script>

<script lang="ts">
export default {
  name: 'VisualizationViewer'
}
</script>

<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="vis-viewer-component" style="display: inline-block"  v-for="n in len/2" :key="n" >
      <a download="result.png" :href=store.task?.visualization_sources?.[n-1] style="width: 100%">
        <img :src="store.task?.visualization_sources?.[n-1]" alt="" width="1024" height="1024"/>
      </a>
    </div>
  </div>
</template>
