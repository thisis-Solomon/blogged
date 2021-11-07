import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailedBlog from '../views/DetailedBlog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Blog',
    component: DetailedBlog,
    params: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
