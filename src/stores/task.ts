import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Task } from '../classes/Task'

export const useTaskStore = defineStore('taskStore', () => {
  // state
  const task = ref<Task | null>(null)
  const selectedImageIndex = ref<number>(0)
  const selectedCorrespImageIndex = ref<number>(0)

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

  function setCorrespImageIndex(imgConvName: string) {
    for (var ending of [".png", ".tif", ".tiff", ".jpg", ".jpeg"]) {
      let i = task?.value!.image_filenames.indexOf((imgConvName).replace(/\.[^/.]+$/, ending))!
      if (i !== -1) {
        selectedCorrespImageIndex.value = i
        return
      }
    }
    selectedCorrespImageIndex.value = -1
  }

  function getCorrespImageIndex(imgConvName: string) {
    for (var ending of [".png", ".tif", ".tiff", ".jpg", ".jpeg"]) {
      let i = task?.value!.image_filenames.indexOf((imgConvName).replace(/\.[^/.]+$/, ending))!
      if (i !== -1) {
        return i
      }
    }
    return -1
  }

  function getCorrespVisIndex(imgConvName: string) {
    let i = task?.value!.visualization_filenames!.indexOf((imgConvName).replace(/\.[^/.]+$/, "_error.txt"))
    if (i !== -1) {
          return i
    }
      for (var ending of [".png", ".tif", ".tiff", ".jpg", ".jpeg"]) {
        i = task?.value!.visualization_filenames!.indexOf((imgConvName).replace(/\.[^/.]+$/, ending))!
        if (i !== -1) {
          return i
        }
      }
      return i
    }

  return {
    task,
    setTask,
    clearTask,
    selectedImageIndex,
    setSelectedImageIndex,
    setCorrespImageIndex,
    getCorrespImageIndex,
    selectedCorrespImageIndex,
    getCorrespVisIndex
  }
})
