import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ref } from 'vue'
import { usePropertyDetailStore } from '@/stores/PropertyStore'
import { mount } from '@vue/test-utils'
import HousesListings from '@/components/HousesListings.vue'

// Mock the store
vi.mock('@/stores/PropertyStore')

// Mock RouterLink
const RouterLinkStub = {
  template: '<a><slot /></a>'
}

describe('HousesListings.vue', () => {
  let propertyStore

  beforeEach(() => {
    propertyStore = {
      getHouselistings: vi.fn(),
      listingsArray: ref([])
    }
    usePropertyDetailStore.mockReturnValue(propertyStore)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('calls getHouselistings and updates searchValue', async () => {
    const wrapper = mount(HousesListings, {
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const searchHouseListing = wrapper.vm.searchHouseListing
    const input = 'test search'

    await searchHouseListing(input)

    expect(propertyStore.getHouselistings).toHaveBeenCalledWith(input)
    expect(wrapper.vm.searchValue).toBe(input)
  })

  it('sorts the listings array by price in ascending order', () => {
    propertyStore.listingsArray.value = [{ price: 200 }, { price: 100 }, { price: 300 }]

    const wrapper = mount(HousesListings, {
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const sortList = wrapper.vm.sortList

    sortList('priceAsc')

    expect(propertyStore.listingsArray.value).toEqual([
      { price: 100 },
      { price: 200 },
      { price: 300 }
    ])
  })

  it('sorts the listings array by price in descending order', () => {
    propertyStore.listingsArray.value = [{ price: 200 }, { price: 100 }, { price: 300 }]

    const wrapper = mount(HousesListings, {
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const sortList = wrapper.vm.sortList

    sortList('priceDesc')

    expect(propertyStore.listingsArray.value).toEqual([
      { price: 300 },
      { price: 200 },
      { price: 100 }
    ])
  })

  it('sorts the listings array by size in ascending order', () => {
    propertyStore.listingsArray.value = [{ size: 200 }, { size: 100 }, { size: 300 }]

    const wrapper = mount(HousesListings, {
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const sortList = wrapper.vm.sortList

    sortList('sizeAsc')

    expect(propertyStore.listingsArray.value).toEqual([{ size: 100 }, { size: 200 }, { size: 300 }])
  })

  it('sorts the listings array by size in descending order', () => {
    propertyStore.listingsArray.value = [{ size: 200 }, { size: 100 }, { size: 300 }]

    const wrapper = mount(HousesListings, {
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const sortList = wrapper.vm.sortList

    sortList('sizeDesc')

    expect(propertyStore.listingsArray.value).toEqual([{ size: 300 }, { size: 200 }, { size: 100 }])
  })
})
