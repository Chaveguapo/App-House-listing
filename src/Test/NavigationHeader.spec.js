import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NavigationHeader from '@/components/NavigationHeader.vue'

describe('Icon Functions', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NavigationHeader, {
      global: {
        stubs: ['RouterLink'] // Stub RouterLink to prevent router errors
      }
    })
  })

  it('Should set home icon to active and info icon to inactive', () => {
    wrapper.vm.setHomeActive()
    expect(wrapper.vm.homeIcon).toBe(wrapper.vm.HOME_ICON_ACTIVE)
    expect(wrapper.vm.aboutIcon).toBe(wrapper.vm.INFO_ICON_INACTIVE)
  })

  it('Should set info icon to active and home to inactive', () => {
    wrapper.vm.setInfoActive()
    console.log('Test 2:', wrapper.vm.homeIcon, wrapper.vm.aboutIcon)
    expect(wrapper.vm.homeIcon).toBe(wrapper.vm.HOME_ICON_INACTIVE)
    expect(wrapper.vm.aboutIcon).toBe(wrapper.vm.INFO_ICON_ACTIVE)
  })
})
