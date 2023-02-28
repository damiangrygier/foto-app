import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CategoryPhotosPage from '../pages/CategoryPhotosPage'
import AddPhotoPage from '../pages/AddPhotoPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/photos/:category',
    name: 'category',
    component: CategoryPhotosPage
  },
  {
    path: '/add-photo',
    name: 'addPhoto',
    component: AddPhotoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
