<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useTaskStore } from '../../stores/task'
import { Task } from '../../classes/Task'

const { task, selectedImageIndex, setSelectedImageIndex } = useTaskStore()

const handleClick = (idx: number) => {
  setSelectedImageIndex(idx)
}
</script>
<script lang="ts">
export default { name: 'ImageSelector' }
</script>
<template>
  <div class="image-selector-component" v-if="task.image_sources">
    <div class="grid grid-cols-3 gap-2">
      <div
        class="image-item"
        v-for="(imgSrc, idx) in task.image_sources"
        @click="handleClick(idx)"
        :key="idx"
      >
        <img :src="imgSrc" alt="" />
        <p class="mt-2 font-semibold text-xs text-center">{{ task.image_filenames[idx] }}</p>
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
