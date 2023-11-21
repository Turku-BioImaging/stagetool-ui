import axios from 'axios'
import type { AxiosResponse } from 'axios'
import FormData from 'form-data'
import { Task } from './Task'

export class StageToolClient {
  baseUrl: string

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL
  }

  static async getTask(id: string): Promise<Task> {
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const response: AxiosResponse<Task> = await axios.get(`${baseUrl}/task`, {
      params: {
        id: id
      }
    })

    const task = new Task(response.data)
    return task
  }

  async createTask(formData: FormData): Promise<Task> {
    const response: AxiosResponse<Task> = await axios.post(`${this.baseUrl}/task`, formData)

    return response.data
  }

  static async getImage(taskId: string, filename: string): Promise<AxiosResponse> {
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const response: AxiosResponse = await axios.get(`${baseUrl}/images`, {
      params: {
        task_id: taskId,
        filename: filename
      },
      responseType: 'arraybuffer'
    })

    return response
  }

  static async getVisualization(taskId: string, filename: string): Promise<AxiosResponse> {
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const response: AxiosResponse = await axios.get(`${baseUrl}/visualizations`, {
      params: {
        task_id: taskId,
        filename: filename
      },
      responseType: 'arraybuffer' // to handle binary data
    })

    return response
  }
}
