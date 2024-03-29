import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const usePropertyDetailStore = defineStore('propertyStore', () => {
  //store variables

  const currentListingId = ref(0)

  const listingsArray = ref([])

  //Delete function
  function deleteListing(id) {
    var myHeaders = new Headers()
    myHeaders.append('X-Api-Key', 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t')

    if (!id) {
      console.log('No house ID found for deletion !')
      return
    }

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch('https://api.intern.d-tt.nl/api/houses/' + id, requestOptions)
      .then((response) => {
        if (response.ok) {
          router.push('/')
        } else {
          console.log('failed to delete data!')
        }
      })
      .catch((error) => console.log('error', error))
  }

  const displayModal = ref(false)

  function showDeleteModal(singleListingId) {
    currentListingId.value = singleListingId
    displayModal.value = true
  }

  function hideDeleteModal() {
    displayModal.value = false
  }

  // List of houses

  function getHouselistings(inputValue) {
    fetch('https://api.intern.d-tt.nl/api/houses', {
      method: 'get',
      headers: {
        'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        listingsArray.value = data.filter((listing) => {
          return (
            String(listing.id).includes(inputValue) ||
            String(listing.price).includes(inputValue) ||
            String(listing.location.city).includes(inputValue) ||
            String(listing.location.zip).includes(inputValue) ||
            String(listing.size).includes(inputValue)
          )
        })
      })
  }

  return {
    currentListingId,
    deleteListing,
    displayModal,
    showDeleteModal,
    hideDeleteModal,
    getHouselistings
  }
})
