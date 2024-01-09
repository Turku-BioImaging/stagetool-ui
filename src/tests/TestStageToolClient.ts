import { Task } from '../classes/Task'
import { StageToolClient } from '../classes/StageToolClient'
import FormData from 'form-data'
import fs from 'fs'

async function testStageToolClient() {
  const client = new StageToolClient()

  // Test the createTask method
  const formData = new FormData()
  formData.append('images', fs.createReadStream('./tests/images/05.png'))
  formData.append('images', fs.createReadStream('./tests/images/06.png'))

  var taskData = await client.createTask(formData)
  const newTask = new Task(taskData)
  console.log(newTask)

  // Test the getTask method
  var taskData = await StageToolClient.getTask(newTask.id)
  const existingTask  = new Task(taskData)
  console.log(existingTask)
}

testStageToolClient().catch(console.error)
