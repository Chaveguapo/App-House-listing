import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const usePropertyDetailStore = defineStore('propertyStore', () => {
  //store variables
  const currentListingId = ref(0)

  const currentHouseListing = ref({
    location: {},
    rooms: {}
  })

  const listingsArray = ref([])

  /**
   * Calling the API to display the data and get it by ID
   * @param {*} houseListingId is the ID of the property who details are fetching
   */
  const getListingDetails = (houseListingId) => {
    fetch('https://api.intern.d-tt.nl/api/houses/' + houseListingId, {
      method: 'get',
      headers: {
        'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        currentHouseListing.value = data[0]
      })
  }

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
          getHouselistings('')
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
        console.log(listingsArray.value)
      })
  }

  /**
   * Function that edit listing
   *
   * @param {*} requestOptions information that the API needs to execute the code
   * @param {*} houseListingId ID of the house listing to edit
   */
  const editListing = (requestOptions, houseListingId) => {
    fetch('https://api.intern.d-tt.nl/api/houses/' + houseListingId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        router.back()
        return false
      })
      .catch((error) => console.log('error', error))
  }

  /**
   * Function that create a new listing
   *
   * @param {*} requestOptions information that the API needs to execute the code
   */
  const createListing = (requestOptions) => {
    fetch('https://api.intern.d-tt.nl/api/houses', requestOptions)
      .then((response) => console.log(response))
      .then((result) => {
        router.back()
        return false
      })
      .catch((error) => console.log('error', error))
  }

  /**
   * Calling the API to display the data and get it by ID
   */

  return {
    currentListingId,
    deleteListing,
    displayModal,
    listingsArray,
    showDeleteModal,
    hideDeleteModal,
    getHouselistings,
    editListing,
    createListing,
    currentHouseListing,
    getListingDetails
  }
})
