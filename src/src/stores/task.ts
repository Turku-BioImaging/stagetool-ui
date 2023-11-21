import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Task } from '../classes/Task'

export const useTaskStore = defineStore('taskStore', () => {
  // state
  const task = ref<Task | null>(null)
  const selectedImageIndex = ref<number | null>(0)

  // actions
  const setTask = (newTask: Task) => {
    task.value = newTask
  }

  const setSelectedImageIndex = (index: number) => {
    selectedImageIndex.value = index
  }

  const clearTask = () => {
    task.value = null
  }

  return {
    task,
    setTask,
    clearTask,
    selectedImageIndex,
    setSelectedImageIndex
  }
})
