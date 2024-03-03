import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import BookView from '../views/BookView.vue'
import AddMenuView from '../views/AddMenuView.vue'
import EditMenuView from '../views/EditMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/add-menu',
      name: 'add-menu',
      component: AddMenuView
    },
    {
      path: '/edit-menu/:time:/:id',
      name: 'edit-menu',
      component: EditMenuView
    },
    {
      path: '/book',
      name: 'book',
      component : BookView
    }
  ]
})

export default router
