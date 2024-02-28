import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './pages/index.vue'
import Comment from './pages/comment.vue'
import Tutorial from './pages/tutorial.vue'
import './assets/tailwind.css'
import 'animate.css'

const routes = [
  { path: '/', name: 'index', component: Index},
  { path: '/comment', name: 'comment', component: Comment },
  { path: '/how', name: 'tutorial' ,component: Tutorial },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

let app = createApp(App)
app.use(router)
app.mount('#app')
