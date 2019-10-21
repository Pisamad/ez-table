import ezTable from './ezTable.vue'

const ComponentLibrary = {
  install(Vue) {
    Vue.component('ez-table', ezTable)
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}
