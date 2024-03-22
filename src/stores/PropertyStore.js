import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePropertyDetailStore = defineStore('propertyDetails', () => {
  const currentPropertyId = ref(0)

  function setCurrentPropertyId(id) {
    currentPropertyId.value = id
  }

  return { currentPropertyId, setCurrentPropertyId }
})
