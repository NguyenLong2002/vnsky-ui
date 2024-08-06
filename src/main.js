

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // Sử dụng createRouter và createWebHistory thay vì VueRouter
import { routes } from './routes'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit';
import 'uikit/dist/js/uikit-icons';

import './index.css' //tailwind Css
import './style.css' 
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

const router = createRouter({
    history: createWebHistory(), // Sử dụng createWebHistory thay vì VueRouter
    routes
})

app.use(router)
app.mount('#app')

