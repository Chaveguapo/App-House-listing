import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const usePropertyDetailStore = defineStore('propertyStore', () => {
  const currentPropertyId = ref(0)

  function setCurrentPropertyId(id) {
    currentPropertyId.value = id
  }

  //Delete function
  function deleteListing(id) {
    console.log('deleteListing')
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

  function showDeleteModal() {
    displayModal.value = true
  }
  function hideDeleteModal() {
    displayModal.value = false
  }

  return {
    currentPropertyId,
    setCurrentPropertyId,
    deleteListing,
    displayModal,
    showDeleteModal,
    hideDeleteModal
  }
})
