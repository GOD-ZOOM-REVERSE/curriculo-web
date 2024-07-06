import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routers/index.js';
import { BootstrapVue } from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(BootstrapVue).use(router).mount('#app');
