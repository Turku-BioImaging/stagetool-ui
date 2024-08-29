<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { TaskUploader } from '../classes/TaskUploader'
import { StageToolClient } from '../classes/StageToolClient'
import { useTaskStore } from '../stores/task'

const emit = defineEmits(['is-waiting'])
const router = useRouter()
const taskStore = useTaskStore()
const selectedFiles = ref<File[]>([])
let intervalId: number | null = null

const sendImageSrc = (event: Event) => {
  handleDemoImageClicked((event.target as HTMLImageElement).src)
}
const handleDemoImageClicked = async (imageSrc: string) => {
  emit('is-waiting', true)
  const response = await fetch(imageSrc)
  const data = await response.blob()
  const metadata = { type: data.type }
  const url = new URL(imageSrc)
  const filename = url.pathname.split('/').pop() || ''
  const file = new File([data], filename, metadata)
  selectedFiles.value = Array.from([file])

  handleUpload()
}

const handleUpload = async () => {
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
  name: 'SampleImageGrid'
}
</script>
<template>
  <div class="sample-image-grid">
    <div class="container mx-auto">
      <div class="image-grid">
        <h2>Try StageTool</h2>
        <p>
          Choose one of the demo images to see how StageTool works. The selected image is sent to a
          server for artificial intelligence prediction using the StageTool tubule and cell models.
          The results will be shown in a separate page.
        </p>
        <ul class="mt-8">
          <li><img @click="sendImageSrc" src="@/assets/sample-images/01.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/02.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/03.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/04.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/05.png" alt="" /></li>
          <li><img @click="sendImageSrc" src="@/assets/sample-images/06.png" alt="" /></li>
        </ul>
        <p class="mt-6 text-sm italic">
          Compute resources for this demo are provided by the
          <a href="https://csc.fi/en/" target="_blank">Centre for Scientific Computing</a>.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.sample-image-grid {
  div.image-grid {
    @screen lg {
      @apply w-3/4 mx-auto py-12;
    }

    h2 {
      @apply font-semibold uppercase tracking-widest text-3xl;
    }
    ul {
      @apply grid grid-cols-6 gap-4;
      li {
        @apply border border-slate-700;

        &:hover {
          @apply border-rose-500 border-4;
        }
      }
    }
  }
}
</style>
