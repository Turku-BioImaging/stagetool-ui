<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()
let idx = computed(() => store.selectedImageIndex)

let imgConvName = computed(() => store.task?.imageconversion_filenames?.[idx.value]!)


let newVisIdx = computed(() => store.selectedCorrespImageIndex)
let newResIdx = computed(() => store.task?.resultconversion_filenames?.indexOf(imgConvName!.value)!)

let visImgSrc = computed(() => store.task?.visualization_sources?.[newVisIdx.value])
let outName = computed(() => store.task?.visualization_filenames?.[newVisIdx.value])

let ResConImgSrc = computed(() => store.task?.resultconversion_sources?.[newResIdx.value])
let ResConImgName = computed(() => store.task?.resultconversion_filenames?.[newResIdx.value])

</script>

<script lang="ts">
export default {
  name: 'VisualizationViewer'
}
</script>

<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="vis-viewer-component" style="display: inline-block" >
      <a :download="['result', outName].join('-')" :href=visImgSrc style="width: 100%" v-if="!outName?.endsWith('error.txt')">
        <img :src="ResConImgSrc" alt="" width="1024" height="1024" />
      </a>
      <div width="1024" height="1024" v-else>
        Image {{ ResConImgName!.replace(/\.[^/.]+$/, "") }} could not be processed. The corresponding error is:
        <object :data="visImgSrc" alt="" >
          Could not read the error message.
        </object>  
      </div>
    </div>
  </div>
</template>
