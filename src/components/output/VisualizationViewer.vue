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
    <template v-for="n in len" :key="n">
      <div class="vis-viewer-component" style="display: inline-block" v-if="!store.task?.visualization_filenames?.[n-1].startsWith('pred_')">
        <a :download="['result', store.task?.visualization_filenames?.[n-1]].join('-')" :href=store.task?.visualization_sources?.[n-1] style="width: 100%" v-if="!store.task?.visualization_filenames?.[n-1].endsWith('error.txt')">
          <img :src="store.task?.visualization_sources?.[n-1]" alt="" width="1024" height="1024"/>
          <p class="mt-2 font-semibold text-xs text-center">
            {{ ['result', store.task?.visualization_filenames?.[n-1]].join('-') }}
          </p>
        </a>
        <div width="1024" height="1024" v-else>
          Image {{ store.task?.visualization_filenames?.[n-1] }} could not be processed. The corresponding error is:
          <object :data="store.task?.visualization_sources?.[n-1]" alt="" >
            Could not read the error message.
          </object>
        </div>
      </div>
    </template>
  </div>
</template>
