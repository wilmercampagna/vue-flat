import * as VueComponentsLibComponents from './components'

const VueComponentLib = {
  install (Vue, options) {
    Object.values(VueComponentsLibComponents).forEach(component => {
      Vue.use(
        component,
        options[component.name] ? options[component.name] : {}
      )
    })
  }
}

export default VueComponentLib
