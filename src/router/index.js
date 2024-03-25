import { createRouter, createWebHistory } from 'vue-router'
import HousesListings from '../components/HousesListings.vue'
import AboutPage from '../components/AboutPage.vue'
import HouseDetail from '@/components/HouseDetail.vue'
import EditListing from '@/components/EditListing.vue'

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
      path: '/house-detail',
      name: 'house-detail',
      component: HouseDetail
    },

    {
      path: '/edit-listing',
      name: 'edit-listing',
      component: EditListing
    }
  ]
})

export default router
