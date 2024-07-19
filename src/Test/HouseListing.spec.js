import { describe, it, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HousesListings from '@/components/HousesListings.vue'
import { usePropertyDetailStore } from '@/stores/PropertyStore'
import { ref } from 'vue'

// Mock the PropertyStore
vi.mock('@/stores/PropertyStore', () => ({
  usePropertyDetailStore: vi.fn(() => ({
    getHouselistings: vi.fn(),
    listingsArray: ref([])
  }))
}))

describe('HousesListings.vue', () => {
  let wrapper
  let propertyStore

  beforeEach(() => {
    // Reset the mock before each test
    propertyStore = usePropertyDetailStore()
    propertyStore.listingsArray.value = [
      { price: 200000, size: 1200 },
      { price: 150000, size: 900 },
      { price: 300000, size: 1500 }
    ]

    wrapper = shallowMount(HousesListings, {})
  })

  it('should call getHouselistings and update searchValue when searchHouseListing is called', async () => {
    const { searchHouseListing, searchValue } = wrapper.vm
    const input = 'test input'

    await searchHouseListing(input)

    expect(propertyStore.getHouselistings).toHaveBeenCalledWith(input)
    expect(searchValue).toBe(input)
  })

  it('should sort the listings by price in ascending order', async () => {
    const { sortList } = wrapper.vm

    await sortList('priceAsc')

    expect(propertyStore.listingsArray.value).toEqual([
      { price: 150000, size: 900 },
      { price: 200000, size: 1200 },
      { price: 300000, size: 1500 }
    ])
  })

  it('should sort the listings by price in descending order', async () => {
    const { sortList } = wrapper.vm

    await sortList('priceDesc')

    expect(propertyStore.listingsArray.value).toEqual([
      { price: 300000, size: 1500 },
      { price: 200000, size: 1200 },
      { price: 150000, size: 900 }
    ])
  })

  it('should sort the listings by size in ascending order', async () => {
    const { sortList } = wrapper.vm

    await sortList('sizeAsc')

    expect(propertyStore.listingsArray.value).toEqual([
      { price: 300000, size: 1500 },
      { price: 200000, size: 1200 },
      { price: 150000, size: 900 }
    ])
  })

  it('should sort the listings by size in descending order', async () => {
    const { sortList } = wrapper.vm

    await sortList('sizeDesc')

    expect(propertyStore.listingsArray.value).toEqual([
      { price: 150000, size: 900 },
      { price: 200000, size: 1200 },
      { price: 300000, size: 1500 }
    ])
  })
})
