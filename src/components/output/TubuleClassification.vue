<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '../../stores/task'
import type { Tubule } from '../../classes/Task'

const store = useTaskStore()

let idx = computed(() => store.selectedImageIndex)
let ConvImageName = computed(() => store.task?.imageconversion_filenames?.[idx.value]!)

let newIdx = computed(() => {
    for (var ending of [".png", ".tif", ".tiff", ".jpg", ".jpeg"]) {
      let i = store.task?.image_filenames.indexOf((ConvImageName!.value).replace(/\.[^/.]+$/, ending))!
      if (i !== -1) {
        return i
      }
    }
    return 0
  })

const selectedImageFilename = computed(
  () => store.task?.image_filenames?.[newIdx.value]
)

const task = computed(() => store.task)
// const tubules = computed(() => task.value?.results?.[selectedImageFilename.value]?.tubules)
const tubules = computed(() => {
  if (selectedImageFilename.value !== undefined) {
    return task.value?.results?.[selectedImageFilename.value]?.tubules
  }
  return []
})

const tubuleCount = computed(() => tubules.value?.length)
const tubuleClasses = computed(() => tubules.value?.map((tub: Tubule) => tub.label))
const tubuleScores = computed(() => tubules.value?.map((tub: Tubule) => tub.score))
const tubuleIds = computed(() => tubules.value?.map((tub: Tubule) => tub.id))

const tubuleObjects = computed(() => {
  if (
    tubuleCount.value !== undefined &&
    tubuleCount.value > 0 &&
    tubuleClasses.value !== undefined &&
    tubuleScores.value !== undefined &&
    tubuleIds.value !== undefined
  ) {
    const tubules = []
    for (let i = 0; i < tubuleCount.value; i++) {
      tubules.push({
        class: tubuleClasses.value[i],
        score: tubuleScores.value[i],
        id: tubuleIds.value[i]
      })
    }
    return tubules
  }
  return []
})
</script>
<script lang="ts">
export default {
  name: 'TubuleClassification'
}
</script>
<template>
  <h1 class="font-bold">
    Tubule Data for Image {{ selectedImageFilename }}
  </h1>
  <div class="tubule-classification" v-if="tubuleObjects.length != 0">
    <h2 class="font-semibold text-lg">
      Tubules <span class="italic">({{ tubuleCount }})</span>
    </h2>
    <ul>
      <li v-for="tub in tubuleObjects" :key="tub.id">
        Tubule {{ tub.id }}: {{ tub.class }} ({{ (tub.score * 100).toFixed(2) }}%)
      </li>
    </ul>
  </div>
  <div v-else>
    The Tubule data for this image could not be generated. Please check the "Results" section for the reason.
  </div>
</template>
