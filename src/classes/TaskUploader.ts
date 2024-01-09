import { StageToolClient } from './StageToolClient'
import { Task } from './Task'
import FormData from 'form-data'

export class TaskUploader {
  static async upload(imageFiles: File[]): Promise<Task> {
    const apiClient = new StageToolClient()
    const formData = new FormData()

    imageFiles.forEach((file) => {
      formData.append('images', file)
    })

    try {
      const taskData = await apiClient.createTask(formData)
      // console.log(taskData)
      return new Task(taskData)
    } catch (error) {
      console.error('Failed to create task:', error)
      throw error
    }
  }
}
