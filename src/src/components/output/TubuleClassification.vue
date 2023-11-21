<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()
const selectedImageFilename = computed(() => store.task.image_filenames[store.selectedImageIndex])
const tubData = computed(() => store.task.results[selectedImageFilename.value]['tub_data'])
const tubCount = computed(() => tubData.value.boxes.length)
const tubClasses = computed(() => tubData.value.labels)
const tubScores = computed(() => tubData.value.scores)
</script>
<script lang="ts">
export default {
  name: 'TubuleClassification'
}
</script>
<template>
  <div class="tubule-classification">
    <h2 class='font-semibold text-lg'>
      Tubules <span class="italic">({{ tubCount }})</span>
    </h2>
    <ul>
      <li v-for="(tubClass, idx) in tubClasses" :key="idx">
        Tubule {{ idx + 1 }}: {{ tubClass }} ({{ (parseFloat(tubScores[idx]) * 100).toFixed(2) }}%)
      </li>
    </ul>
  </div>
</template>
