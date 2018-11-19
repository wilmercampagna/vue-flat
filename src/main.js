import Vue from 'vue'

import tagComponent from './components/tag-component/tag-component'

const components = [
  tagComponent
]

components.forEach(component => {
  Vue.component(component.name, component)
})

module.exports = {
  tagComponent
}

module.exports.default = module.exports
