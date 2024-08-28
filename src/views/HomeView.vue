<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { useTaskStore } from '../stores/task'
import { useRouter } from 'vue-router'
import WaitSpinner from '../components/WaitSpinner.vue'
import HomeIntroSection from '../components/HomeIntroSection.vue'
import HomeAbstractSection from '../components/HomeAbstractSection.vue'
import SampleImageGrid from '../components/SampleImageGrid.vue'
import CitationInfo from '../components/CitationInfo.vue'
import FooterDefault from '../components/FooterDefault.vue'
const router = useRouter()
const uploadButtonEnabled = ref(false)
const selectedFiles = ref<File[]>([])

const taskStore = useTaskStore()

const handleFileChange = (event: Event) => {
  selectedFiles.value = Array.from((event.target as HTMLInputElement).files || [])
  uploadButtonEnabled.value = selectedFiles.value.length > 0
}

const handleProcessIsWaiting = (isWaiting: boolean) => {
  showWaitSpinner.value = isWaiting
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

// watch(
//   () => taskStore.task?.status,
//   async (newStatus) => {
//     if (newStatus === 'completed') {
//       if (intervalId !== null) clearInterval(intervalId)
//       await taskStore.task?.getImages()
//       await taskStore.task?.getVisualizations()
//       router.push(`/output/${taskStore.task?.id}`)
//     }
//   }
// )
</script>

<script lang="ts">
export default {
  components: {
    SampleImageGrid,
    WaitSpinner,
    HomeIntroSection,
    HomeAbstractSection,
    FooterDefault
  },
  name: 'HomeView'
}
</script>

<template>
  <div class="home-view">
    <home-intro-section />
    <home-abstract-section />
    <citation-info />
    <sample-image-grid @is-waiting="handleProcessIsWaiting" />
    <section class="upload-container">
      <div class="mt-6">
        <h2>Upload your own images</h2>
        <input
          type="file"
          accept="image/tiff, image/png"
          multiple
          @change="handleFileChange"
        /><br />
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

    <footer-default />

    <transition name="fade">
      <wait-spinner v-if="showWaitSpinner"></wait-spinner>
    </transition>
  </div>
</template>

<style lang="scss">
div.home-view {
  @apply flex flex-col justify-center;

  section.upload-container {
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

    @screen lg {
      & > div {
        @apply w-2/3 mx-auto;
      }
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

  section.organization-logos {
    @apply text-center text-sm px-12 bg-black py-24;
    img {
      @apply mx-auto;
    }

    @screen lg {
      & > div:nth-child(1) {
        @apply my-8;
      }

      p {
        @apply text-center w-1/3 mx-auto;
      }
    }
  }
}
</style>
