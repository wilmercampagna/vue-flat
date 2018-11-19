import { shallowMount } from '@vue/test-utils'
import tagComponent from './tag-component'

describe('tag-component.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'default text'
    const wrapper = shallowMount(tagComponent, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
