<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '../../stores/task'
import type { Tubule } from '../../classes/Task'

const store = useTaskStore()
const task = computed(() => store.task)
const selectedImageFilename = computed(
  () => store.task?.image_filenames?.[store.selectedImageIndex]
)

const tubules = computed(() => {
  if (selectedImageFilename.value !== undefined) {
    return task.value?.results?.[selectedImageFilename.value]?.tubules
  }
  return []
})

// const imageData = computed(() => store.task.results[selectedImageFilename.value])
// const tubuleData = computed(() => imageData.value.tubules)

interface TubuleObject {
  class: string
  score: number
  id: number
  labelCounts: { [key: string]: number }
}

const tubuleObjects = computed(() => {
  const tubuleData: TubuleObject[] = []

  if (tubules.value === undefined) {
    return tubuleData
  }

  for (let i = 0; i < tubules.value.length; i++) {
    const data = {
      class: tubules.value[i].label,
      score: tubules.value[i].score,
      id: tubules.value[i].id,
      labelCounts: {}
    }

    const labelCounts: { [key: string]: number } = {}
    tubules.value[i].cells.labels.forEach((label) => {
      if (label in labelCounts) {
        labelCounts[label] += 1
      } else {
        labelCounts[label] = 1
      }
    })

    data.labelCounts = labelCounts

    tubuleData.push(data)
  }

  return tubuleData
})
</script>

<script lang="ts">
export default {
  name: 'TubuleDataTable'
}
</script>

<template>
  <div class="tubule-data-tables">
    <!-- <h2>Tubule Data</h2> -->

    <div class="tubule-table" v-for="tub in tubuleObjects" :key="tub.id">
      <h3 class="font-bold">Tubule {{ tub.id }}: {{ tub.class }}</h3>

      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Cell type
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              No. of cells
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(count, label) in tub.labelCounts" :key="label">
            <td class="px-3 py-1">{{ label }}</td>
            <td class="px-3 py-1">{{ count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
