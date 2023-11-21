<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TaskUploader } from '../classes/TaskUploader'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'
import { useRouter } from 'vue-router'

const router = useRouter()
const uploadButtonEnabled = ref(false)
const selectedFiles = ref([])

let task = ref(null)
const { task: storeTask, setTask, clearTask } = useTaskStore()

const handleFileChange = (event) => {
  selectedFiles.value = Array.from(event.target.files)
  uploadButtonEnabled.value = selectedFiles.value.length > 0
}

const handleUpload = async () => {
  task = await TaskUploader.upload(selectedFiles.value)
  setTask(task)
}

onMounted(async () => {
  const staticTaskId = import.meta.env.VITE_STATIC_TASK_ID
  if (staticTaskId) {
    try {
      task = await StageToolClient.getTask(staticTaskId)
      setTask(task)

      router.push(`/output/${task.id}`)
    } catch (error) {
      console.error('Error fetching task:', error)
    }
  }
})
</script>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<template>
  <div class="home-view">
    <div class="upload-container">
      <h2>Upload your images</h2>
      <input type="file" accept="image/tiff, image/png" multiple @change="handleFileChange" /><br />
      <div class="text-center">
        <button :disabled="!uploadButtonEnabled" @click="handleUpload">Upload</button>
      </div>
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
</template>

<style lang="scss">
div.home-view {
  @apply h-full;
  @apply flex flex-col justify-center;

  div.upload-container {
    @apply bg-slate-800 p-4;
    h2 {
      @apply text-2xl font-semibold mb-4 text-center;
    }

    input {
      @apply bg-slate-600 w-full;
    }

    button {
      @apply text-center bg-slate-500 w-1/3 p-2 mt-4;
    }
  }

  div.info-div {
    @apply mt-6;

    ul {
      list-style-type: square;
      @apply ml-6;
    }
  }
}
</style>
