import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from 'vue'
import NavigationHeader from './components/NavigationHeader.vue'

const HOME_ICON_ACTIVE = 'home-active'
const HOME_ICON_INACTIVE = 'home-inactive'
const INFO_ICON_ACTIVE = 'info-active'
const INFO_ICON_INACTIVE = 'info-inactive'

describe('Icon Functions', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NavigationHeader)
  })

  it('Should set home icon to active and info icon to inactive', () => {
    wrapper.vm.setHomeActive()
    console.log('Test 1:', wrapper.vm.homeIcon, wrapper.vm.aboutIcon)

    expect(wrapper.vm.homeIcon).toBe(HOME_ICON_ACTIVE)
    expect(wrapper.vm.aboutIcon).toBe(INFO_ICON_INACTIVE)
  })

  it('Should set info icon to active and home to inactive', () => {
    console.log('Test 2:', wrapper.vm.homeIcon, wrapper.vm.aboutIcon)

    wrapper.vm.setInfoActive()
    expect(wrapper.vm.homeIcon).toBe(HOME_ICON_INACTIVE)
    expect(wrapper.vm.aboutIcon).toBe(INFO_ICON_ACTIVE)
  })
})
