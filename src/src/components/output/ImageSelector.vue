<script setup lang="ts">
import { ref, inject } from 'vue'
import { Task } from '../../classes/Task'
const taskStore = inject('taskStore')

const handleClick = (idx: number) => {
  taskStore.setSelectedImageIndex(idx)
}
</script>
<script lang="ts">
export default { name: 'ImageSelector' }
</script>
<template>
  <div class="image-selector-component" v-if="taskStore.task.image_sources">
    <div class="grid grid-cols-3 gap-2">
      <div
        class="image-item"
        v-for="(imgSrc, idx) in taskStore.task.image_sources"
        @click="handleClick(idx)"
        :key="idx"
      >
        <img :src="imgSrc" alt="" />
        <p class="mt-2 font-semibold text-xs text-center">
          {{ taskStore.task.image_filenames[idx] }}
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
