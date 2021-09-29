import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import {createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const createapp = createApp(App)
createapp.config.globalProperties.$axios = axios
const router = createRouter({
    history: createWebHistory('/'),
    routes: routes,
})
createapp.use(router)
router.isReady().then(() => createapp.mount('#app'))
