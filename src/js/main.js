import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Popover } from 'bootstrap';

import App from './App.vue'
import MainMenu from '../pages/MainMenu.vue'
import Dashboard from '../pages/Dashboard.vue'
import Sales from '../pages/Sales.vue'
import Finance from '../pages/Finance.vue'
import Employees from '../pages/Employees.vue'
import Operations from '../pages/Operations.vue'
import SatisfactionIcon from '../components/SatisfactionIcon.vue'

import 'bootstrap-icons/font/bootstrap-icons.css'
import '../scss/styles.scss'

const routes = [
  { path: '/', component: MainMenu },
  { path: '/dashboard', component: Dashboard },
  { path: '/sales', component: Sales },
  { path: '/finance', component: Finance },
  { path: '/employees', component: Employees },
  { path: '/operations', component: Operations },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('SatisfactionIcon', SatisfactionIcon)

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
})
