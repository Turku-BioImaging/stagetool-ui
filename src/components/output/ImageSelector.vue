<script setup lang="ts">
import { useTaskStore } from '../../stores/task'

const taskStore = useTaskStore()
taskStore.setCorrespImageIndex(taskStore.task?.imageconversion_filenames?.[0]!)

const handleClick = (idx: number, thisName: any) => {
  taskStore.setSelectedImageIndex(idx)
  taskStore.setCorrespImageIndex(thisName)
}
</script>
<script lang="ts">
export default {
  name: 'ImageSelector'
}
</script>

<template>
  <div class="image-selector-component" v-if="taskStore.task?.imageconversion_sources">
    <div class="grid grid-cols-9 gap-2">
      <div
        class="image-item"
        v-for="(imgSrc, idx) in taskStore.task.imageconversion_sources"
        @click="handleClick(idx, taskStore.task.imageconversion_filenames?.[idx])"
        :key="idx"
      >
        <img :src="imgSrc" alt="" width="256" height="256"/>
        <p class="mt-2 font-semibold text-xs text-center">
          {{ taskStore.task?.visualization_filenames?.[taskStore.getCorrespImageIndex(taskStore.task?.imageconversion_filenames?.[idx]!)] }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.image-selector-component {
  div.image-item {
    cursor: pointer;
  }
}
</style>
