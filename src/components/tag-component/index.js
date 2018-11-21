import tagComponent from './tag-component'

tagComponent.install = function install (Vue) {
  Vue.component(tagComponent.name, tagComponent)
}

export default tagComponent
