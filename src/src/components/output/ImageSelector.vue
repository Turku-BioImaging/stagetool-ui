<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useTaskStore } from '../../stores/task'
import { Task } from '../../classes/Task'

const { task: storeTask, setTask } = useTaskStore()

let task = ref<Task | null>(null)
let imageSources = computed(() => task?.value?.image_sources || [])

onMounted(async () => {
  task.value = storeTask
})
</script>
<script lang="ts">
export default { name: 'ImageSelectr' }
</script>
<template>
  <div class="image-selector-component" v-if="imageSources">
    <div class="grid grid-cols-3 gap-2">
      <div class="image-item" v-for="(imgSrc, idx) in imageSources" :key="idx">
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
