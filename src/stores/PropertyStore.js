import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const usePropertyDetailStore = defineStore('propertyStore', () => {
  //store reactive variables (Ref)
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
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch house listing ID')
        }
        return response.json()
      })
      .then((data) => {
        currentHouseListing.value = data[0]
      })
  }

  /**
   *- This function takes the ID and if is defined the listing will be remove,  and after redirect the user to the home
   * @param {*} id > the identification of the listing
   * @returns empty if nothing to delete
   *
   */
  function deleteListing(id) {
    let myHeaders = new Headers()
    myHeaders.append('X-Api-Key', 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t')

    if (!id) {
      console.log('No house ID found for deletion!')
      return
    }

    let requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch('https://api.intern.d-tt.nl/api/houses/' + id, requestOptions).then((response) => {
      if (response.ok) {
        getHouselistings('')
        router.push('/')
      } else {
        console.log('failed to delete data!')
      }
    })
  }

  const displayModal = ref(false)
  /**
   *Is expect to execute the function and change update the value of the reactive variable display modal
   * @param {*} singleListingId is the
   */
  function showDeleteModal(singleListingId) {
    currentListingId.value = singleListingId
    displayModal.value = true
  }
  /**
   * This function update the value of displayModal and hide the modal of delete listing
   */
  function hideDeleteModal() {
    displayModal.value = false
  }

  /**
   *This function fetch the data from API and parse into a JSON, then this data will update the listingArray (ref) and will filter it, and parse into a string and the info I have includes the user input(Input value)
   * @param {*} inputValue
   */
  function getHouselistings(inputValue) {
    fetch('https://api.intern.d-tt.nl/api/houses', {
      method: 'get',
      headers: {
        'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t'
      }
    })
      //By using .JSON() convert o parse the response into this format
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch house listings')
        }
        return response.json()
      })
      .then((data) => {
        listingsArray.value = data.filter((listing) => {
          return (
            //parse data into a string and the info I have includes the user input (Input value)
            String(listing.location.street).includes(inputValue) ||
            String(listing.id).includes(inputValue) ||
            String(listing.price).includes(inputValue) ||
            String(listing.location.city).includes(inputValue) ||
            String(listing.location.zip).includes(inputValue) ||
            String(listing.size).includes(inputValue)
          )
        })
      })
  }

  /**
   * Function that takes info from de API required and the ID of the listing to edit
   * @param {*} requestOptions information that the API needs to execute the code
   * @param {*} houseListingId ID of the house listing to edit
   */
  const editListing = (requestOptions, houseListingId) => {
    fetch('https://api.intern.d-tt.nl/api/houses/' + houseListingId, requestOptions)
      .then((response) => {
        console.log('Edit listing response:', response)
        router.back()
        return false
      })
      .catch((error) => console.log('error', error))
  }

  /**
   * Function that send POST(Send data to be stored) request to the URL to create new listings and handle the success response  *
   * @param {*} requestOptions information that the API needs to execute the code
   */
  const createListing = (requestOptions) => {
    fetch('https://api.intern.d-tt.nl/api/houses', requestOptions)
      .then((response) => {
        console.log('Create listing response:', response)
        router.back()
        return false
      })
      .catch((error) => console.log('error', error))
  }

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
