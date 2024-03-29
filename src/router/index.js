import { createRouter, createWebHistory } from 'vue-router'
import HousesListings from '../components/HousesListings.vue'
import AboutPage from '../components/AboutPage.vue'
import HouseDetail from '@/components/HouseDetail.vue'
import EditOrCreateListing from '@/components/EditOrCreateListing.vue'
import { usePropertyDetailStore } from '@/stores/PropertyStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HousesListings,
      beforeEnter: async (to, from, next) => {
        const propertyStore = usePropertyDetailStore()
        await propertyStore.getHouselistings('')
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
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
