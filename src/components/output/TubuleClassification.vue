<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()
const selectedImageFilename = computed(() => store.task.image_filenames[store.selectedImageIndex])

const imageData = computed(() => store.task.results[selectedImageFilename.value])
const tubData = computed(() => imageData.value.tubules)
const tubCount = computed(() => tubData.value.length)
const tubClasses = computed(() => imageData.value.tubules.map((tub) => tub.label))
const tubScores = computed(() => imageData.value.tubules.map((tub) => tub.score))
const tubIds = computed(() => imageData.value.tubules.map((tub) => tub.id))

const tubuleObjects = computed(() => {
  const tubules = []
  for (let i = 0; i < tubCount.value; i++) {
    tubules.push({
      class: tubClasses.value[i],
      score: tubScores.value[i],
      id: tubIds.value[i]
    })
  }
  return tubules
})
</script>
<script lang="ts">
export default {
  name: 'TubuleClassification'
}
</script>
<template>
  <div class="tubule-classification">
    <h2 class="font-semibold text-lg">
      Tubules <span class="italic">({{ tubCount }})</span>
    </h2>
    <ul>
      <li v-for="tub in tubuleObjects" :key="tub.id">
        Tubule {{ tub.id }}: {{ tub.class }} ({{ (parseFloat(tub.score) * 100).toFixed(2) }}%)
      </li>
    </ul>
  </div>
</template>
