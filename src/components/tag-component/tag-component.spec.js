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
  it('renders a different class if props.options had another config', () => {
    const wrapper = shallowMount(tagComponent, {
      propsData: {
        text: 'default text',
        options: {
          size: 'is-large',
          color: 'is-black'
        }
      }
    })
    expect(wrapper.classes('is-large')).toBe(true)
    expect(wrapper.classes('is-black')).toBe(true)
  })
})
