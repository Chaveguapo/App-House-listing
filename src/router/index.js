import { createRouter, createWebHistory } from 'vue-router'
import HousesListings from '../components/HousesListings.vue'
import AboutPage from '../components/AboutPage.vue'
import HouseDetail from '@/components/HouseDetail.vue'
import EditOrCreateListing from '@/components/EditOrCreateListing.vue'
import DeleteListing from '@/components/DeleteListing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HousesListings
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutPage
    },
    {
      path: '/house-detail/:id',
      name: 'house-detail',
      component: HouseDetail
    },

    {
      path: '/edit-listing/:id',
      name: 'edit-listing',
      component: EditOrCreateListing
    },
    {
      path: '/create-listing/',
      name: 'create-listing',
      component: EditOrCreateListing
    }
  ]
})

export default router
