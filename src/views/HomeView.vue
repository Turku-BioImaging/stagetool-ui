<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { TaskUploader } from '../classes/TaskUploader'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'
import { useRouter } from 'vue-router'
import WaitSpinner from '../components/WaitSpinner.vue'
import SampleImageGrid from '../components/SampleImageGrid.vue'
import CitationInfo from '../components/CitationInfo.vue'
const router = useRouter()
const uploadButtonEnabled = ref(false)
const selectedFiles = ref<File[]>([])
const handleDemoImageClicked = async (imageSrc: string) => {
  const response = await fetch(imageSrc)
  const data = await response.blob()
  const metadata = { type: data.type }
  const url = new URL(imageSrc)
  const filename = url.pathname.split('/').pop() || ''
  const file = new File([data], filename, metadata)
  selectedFiles.value = Array.from([file])

  handleUpload()
}

const taskStore = useTaskStore()

const handleFileChange = (event: Event) => {
  // selectedFiles.value = Array.from(event.target?.files)
  selectedFiles.value = Array.from((event.target as HTMLInputElement).files || [])
  uploadButtonEnabled.value = selectedFiles.value.length > 0
}

const handleUpload = async () => {
  let task = await TaskUploader.upload(selectedFiles.value)
  taskStore.setTask(task)

  showWaitSpinner.value = true

  intervalId = setInterval(async () => {
    let fetchedTask = await StageToolClient.getTask(task.id.toString())
    await fetchedTask.populate()
    await taskStore.setTask(fetchedTask)
    // console.log(taskStore.task.status)
  }, 5000) as unknown as number
}

const showWaitSpinner = ref(false)

onMounted(async () => {
  const staticTaskId = import.meta.env.VITE_STATIC_TASK_ID
  if (staticTaskId) {
    try {
      router.push(`/output/${staticTaskId}`)
    } catch (error) {
      console.error('Error fetching task:', error)
    }
  }
})

let intervalId: number | null = null

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
  components: { SampleImageGrid, WaitSpinner },
  name: 'HomeView'
}
</script>

<template>
  <div class="home-view">
    <section class="intro-section border-slate-800 border-b p-12 pt-24">
      <h1 class="text-2xl font-semibold text-center text-cyan-400">StageTool</h1>
      <p class="mt-3 text-center">
        An automated approach for identification of mouse seminiferous epithelial cell
        types and stages based on fluorescent chromating labeling.
      </p>
    </section>

    <sample-image-grid @imageSelected="handleDemoImageClicked" />
    <div class="upload-container mt-6">
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

    <citation-info></citation-info>

    <transition name="fade">
      <wait-spinner v-if="showWaitSpinner"></wait-spinner>
    </transition>
  </div>
</template>

<style lang="scss">
div.home-view {
  // @apply h-full;
  @apply flex flex-col justify-center;

  div.upload-container {
    @apply bg-slate-900 p-8;
    h2 {
      @apply text-2xl mb-4 text-center;
    }

    input {
      @apply bg-slate-600 w-full;
    }

    button {
      @apply text-center font-semibold bg-cyan-400 text-white w-1/3 p-2 mt-4;
    }
  }

  div.info-div {
    @apply mt-6;

    ul {
      list-style-type: square;
      @apply ml-6;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
