<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore } from '../../stores/task'

const store = useTaskStore()
const selectedImageFilename = computed(() => store.task.image_filenames[store.selectedImageIndex])

const imageData = computed(() => store.task.results[selectedImageFilename.value])
const tubuleData = computed(() => imageData.value.tubules)

const tubuleObjects = computed(() => {
  const tubules = []
  for (let i = 0; i < tubuleData.value.length; i++) {
    const data = {
      class: tubuleData.value[i].label,
      score: tubuleData.value[i].score,
      id: tubuleData.value[i].id,
      labelCounts: {}
    }

    const labelCounts = {}
    tubuleData.value[i].cells.labels.forEach((label) => {
      if (label in labelCounts) {
        labelCounts[label] += 1
      } else {
        labelCounts[label] = 1
      }
    })

    data.labelCounts = labelCounts

    tubules.push(data)
  }

  return tubules
})
</script>

<script lang='ts'>
export default {
    name: 'TubuleDataTable'
}
</script>

<template>
  <div class="tubule-data-tables">
    <!-- <h2>Tubule Data</h2> -->

    <div class="tubule-table" v-for="tub in tubuleObjects" :key="tub.id">
      <h3 class='font-bold'>Tubule {{ tub.id }}: {{ tub.label }}</h3>

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
        <tbody class="divide-y divide-gray-200 ">
          <tr v-for="(count, label) in tub.labelCounts" :key="label">
            <td class='px-3 py-1'>{{ label }}</td>
            <td class='px-3 py-1'>{{ count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
