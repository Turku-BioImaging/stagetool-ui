<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useRouter } from 'vue-router'
import WaitSpinner from '../components/WaitSpinner.vue'
import HomeIntroSection from '../components/HomeIntroSection.vue'
import HomeAbstractSection from '../components/HomeAbstractSection.vue'
import SampleImageGrid from '../components/SampleImageGrid.vue'
import ImageUploader from '../components/ImageUploader.vue'
import CitationInfo from '../components/CitationInfo.vue'
import FooterDefault from '../components/FooterDefault.vue'
const router = useRouter()

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
</script>

<script lang="ts">
export default {
  components: {
    WaitSpinner,
    HomeIntroSection,
    HomeAbstractSection,
    SampleImageGrid,
    ImageUploader,
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

    <image-uploader @is-waiting="handleProcessIsWaiting" />

    <citation-info />
    <footer-default />

    <transition name="fade">
      <wait-spinner v-if="showWaitSpinner"></wait-spinner>
    </transition>
  </div>
</template>

<style lang="scss">
div.home-view {
  @apply flex flex-col justify-center;

}
</style>
