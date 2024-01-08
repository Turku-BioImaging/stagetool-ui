// import { TaskStatus } from './TaskStatus'
import { StageToolClient } from './StageToolClient'

type TaskStatus = 'pending' | 'completed'

export class Task {
  id: string
  status: TaskStatus
  image_filenames: string[]
  visualization_filenames: string[]
  results: string[]
  image_sources: string[] = []
  visualization_sources: string[] = []
  // private _apiClient: StageToolClient

  /**
   * Creates a new Task instance.
   *
   * @param data - An object containing the initial data for the task. This object can include the following properties:
   *   - id: The ID of the task.
   *   - status: The status of the task, as a string.
   *   - images: An array of image filenames associated with the task.
   *   - visualizations: An array of visualization filenames associated with the task.
   *   - results: An array of results associated with the task.
   */
  constructor(data: any = {}) {
    // this._apiClient = new StageToolClient()
    this.id = data.id || ''
    this.status = data.status || 'pending'
    this.image_filenames = data.image_filenames || []
    this.visualization_filenames = data.visualization_filenames || []
    this.results = data.results || []
  }

  /**
   * Populates the task object with data from the API.
   * @returns {Promise<void>} A promise that resolves when the task is successfully populated.
   */
  async populate() {
    try {
      // const data = await this._apiClient.getTask(this.id)
      const data = await StageToolClient.getTask(this.id)
      this.id = data.id
      this.status = data.status

      this.image_filenames = data.image_filenames
      this.visualization_filenames = data.visualization_filenames
      this.results = data.results
    } catch (error) {
      console.error(`Failed to update task ${this.id}:`, error)
    }
  }

  /**
   * Retrieves the images associated with the task.
   * If the images have already been fetched, it returns the cached image sources.
   * Otherwise, it fetches the images from the server and returns the image sources.
   * @returns A promise that resolves to an array of image sources.
   */
  async getImages(): Promise<string[]> {
    const filenames = this.image_filenames

    if (this.image_sources.length == this.image_filenames.length) {
      return this.image_sources
    }

    const taskId = this.id
    const filenamesArray = Array.isArray(filenames) ? filenames : [filenames]

    const imagePromises = filenamesArray.map(async (filename) => {
      const response = await StageToolClient.getImage(taskId, filename)

      const blob = new Blob([response.data], { type: response.headers['content-type'] })
      return URL.createObjectURL(blob)
    })

    this.image_sources = await Promise.all(imagePromises)

    return this.image_sources
  }

  /**
   * Retrieves the visualizations for the task.
   * @returns A promise that resolves to an array of strings representing the visualization sources.
   */
  async getVisualizations(): Promise<string[]> {
    const filenames = this.visualization_filenames
    if (this.visualization_sources.length == this.visualization_filenames.length) {
      return this.visualization_sources
    }

    const taskId = this.id
    const filenamesArray = Array.isArray(filenames) ? filenames : [filenames]

    const visualizationPromises = filenamesArray.map(async (filename) => {
      const response = await StageToolClient.getVisualization(taskId, filename)

      const blob = new Blob([response.data], { type: response.headers['content-type'] })

      return URL.createObjectURL(blob)
    })

    this.visualization_sources = await Promise.all(visualizationPromises)
    return this.visualization_sources
  }
}
