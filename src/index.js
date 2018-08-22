import ezTable from './ez-table.vue';

module.exports = {
  install(Vue) {
    if (this.installed) {
      return
    }

    this.installed = true
    Vue.component('ez-table', ezTable);
  }
};
