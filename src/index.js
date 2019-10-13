import ezTable from './ez-table.vue'

export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true
    Vue.component('ez-table', ezTable)
  }
}
