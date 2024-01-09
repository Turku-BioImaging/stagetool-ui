import '@fontsource/source-sans-pro/300.css'
import '@fontsource/source-sans-pro/600.css'

import './scss/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { useTaskStore } from './stores/task'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const taskStore = useTaskStore()

app.provide('taskStore', taskStore)

app.mount('#app')
