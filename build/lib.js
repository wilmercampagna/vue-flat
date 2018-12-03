import * as Components from '../src/components/index'

const VueComponentLib = {
  install (Vue, options) {
    Object.values(Components).forEach(component => {
      Vue.use(
        component,
        options[component.name] ? options[component.name] : {}
      )
    })
  }
}

export default VueComponentLib
