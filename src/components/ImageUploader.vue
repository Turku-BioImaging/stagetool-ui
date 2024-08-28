<template>
  <section class="upload-container">
    <div class="mt-6">
      <h2>Upload your own images</h2>
      <input type="file" accept="image/tiff, image/png" multiple @change="handleFileChange" /><br />
      <div class="text-center">
        <button :disabled="!uploadButtonEnabled" @click="handleUpload">Upload</button>
      </div>
      <div class="info-div">
        <p>
          <span class="font-semibold">Image requirements</span>
        </p>

        <ul>
          <li>1024 * 1024</li>
          <li>400x magnification</li>
          <li>DAPI or related chromatin staining</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { TaskUploader } from '../classes/TaskUploader'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'
import { useRouter } from 'vue-router'

const emit = defineEmits(['is-waiting'])
const router = useRouter()
const taskStore = useTaskStore()
const uploadButtonEnabled = ref(false)
const selectedFiles = ref<File[]>([])
let intervalId: number | null = null

const handleFileChange = (event: Event) => {
  selectedFiles.value = Array.from((event.target as HTMLInputElement).files || [])
  uploadButtonEnabled.value = selectedFiles.value.length > 0
}

const handleUpload = async () => {
  emit('is-waiting', true)
  let task = await TaskUploader.upload(selectedFiles.value)
  taskStore.setTask(task)

  intervalId = setInterval(async () => {
    let fetchedTask = await StageToolClient.getTask(task.id.toString())
    await fetchedTask.populate()
    await taskStore.setTask(fetchedTask)
  }, 5000) as unknown as number
}

watch(
  () => taskStore.task?.status,
  async (newStatus) => {
    if (newStatus === 'completed') {
      if (intervalId !== null) clearInterval(intervalId)
      await taskStore.task?.getImages()
      await taskStore.task?.getVisualizations()
      router.push(`/output/${taskStore.task?.id}`)
    }
  }
)
</script>

<script lang="ts">
export default {
  name: 'ImageUploader'
}
</script>

<style scoped></style>
