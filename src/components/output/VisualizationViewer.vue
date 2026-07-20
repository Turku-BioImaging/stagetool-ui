<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()
let visImgSrc = computed(() => store.task?.visualization_sources?.[store.selectedImageIndex])
let outName = computed(() => store.task?.visualization_filenames?.[store.selectedImageIndex])
let ResConImgSrc = computed(() => store.task?.resultconversion_sources?.[store.selectedImageIndex])
let ResConImgName = computed(() => store.task?.resultconversion_filenames?.[store.selectedImageIndex])
let selectedName = computed(() => store.task?.image_filenames[store.selectedImageIndex])


</script>

<script lang="ts">
export default {
  name: 'VisualizationViewer'
}
</script>

<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="vis-viewer-component" style="display: inline-block" >
      <a :download="['result', selectedName].join('-')" :href=visImgSrc style="width: 100%" v-if="!outName?.endsWith('error.txt')">
        <img :src="ResConImgSrc" alt="" width="1024" height="1024" />
      </a>
      <div width="1024" height="1024" v-else>
        Image {{ selectedName }} could not be processed. The corresponding error is:
        <object :data="visImgSrc" alt="" >
          Could not read the error message.
        </object>          
      </div>
      Image {{ store.task?.visualization_sources }}
    </div>
  </div>
</template>
