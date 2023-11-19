import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Task } from '../classes/Task'

export const useTaskStore = defineStore('task', () => {
  // state
  const task = ref<Task | null>(null)
  const selectedImage = ref<number>(0)
  const selectedVisualization = ref<number>(0)

  // actions
  const setTask = (newTask: Task) => {
    task.value = newTask
  }

  const setSelectedImage = (filename: string) => {
    selectedImage.value = task.value?.image_filenames?.indexOf(filename) ?? 0
  }

  const setSelectedVisualization = (filename: string) => {
    selectedVisualization.value = task.value?.visualization_filenames?.indexOf(filename) ?? 0
  }

  const clearTask = () => {
    task.value = null
  }

  return {
    task,
    setTask,
    clearTask,
    setSelectedImage,
    setSelectedVisualization,
    selectedImage,
    selectedVisualization
  }
})
