import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CategoryPhotosPage from '../pages/CategoryPhotosPage'
import AddPhotoPage from '../pages/AddPhotoPage'
import SinglePhotoPage from '../pages/SinglePhotoPage'

const routes = [
  {
    path: '/add-photo',
    name: 'addPhoto',
    component: AddPhotoPage
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [{
      path: '/:photoId',
      component: SinglePhotoPage
    }]
  },
  {
    path: '/photos/:category',
    name: 'category',
    component: CategoryPhotosPage,
    children: [{
      path: '/photos/:category/:photoId',
      component: SinglePhotoPage
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
