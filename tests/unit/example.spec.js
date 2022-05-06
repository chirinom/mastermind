import { shallowMount } from '@vue/test-utils'
import Mastermind from '@/components/Mastermind.vue'

describe('Mastermind.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Mastermind, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
