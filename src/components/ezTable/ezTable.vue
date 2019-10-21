<template>
  <div ref="table" style="border-bottom: 2px solid gainsboro;margin-bottom: 5px;">
    <table class="fill" ref="thead" style="margin-bottom:0px">
      <slot name="thead"></slot>
    </table>
    <div ref="tbody" style="overflow-y:auto">
      <table class="fill">
        <slot name="tbody"></slot>
      </table>
    </div>
  </div>
</template>

<style>
.fill {
  width: 100%;
  width: fill-available;
  width: -webkit-fill-available;
  width: -moz-available;
}
</style>

<script>
  import throttle from 'lodash/throttle'
  export default {
    name: 'ezTable',
    props: {
      bottomMarge: {
        default: '10'
      }
    },

    data: () => ({
      winHeight: document.documentElement.clientHeight,
      winWidth: document.documentElement.clientWidth,
      bottom: 0
    }),

    mounted () {
      let vm = this
      // Dispatch class to table elt
      let tclass = vm.$el.getAttribute('class')
      if (tclass !== null) {
        vm.$refs.thead.setAttribute('class', tclass)
        vm.$refs.tbody.setAttribute('class', tclass)
        vm.$el.removeAttribute('class')
      }

      // Add evt observer for resize and simulate it once
      vm.resize = throttle(vm.refreshSize, 100)
      window.addEventListener('resize', vm.handleWindowResize, {passive: true})
      // window.onResize = vm.handleWindowResize
      vm.refreshSize()
    },

    beforeDestroy () {
      let vm = this
      window.removeEventListener('resize', vm.handleWindowResize)
    },

    updated () {
      let vm = this
      vm.refreshSize()
    },

    methods: {
      handleWindowResize (event) {
        let vm = this

        if ((vm.winHeight !== event.currentTarget.innerHeight) || (vm.winWidth !== event.currentTarget.innerWidth)) {
          vm.winHeight = event.currentTarget.innerHeight
          vm.winWidth = event.currentTarget.innerWidth
          vm.refreshSize()
        }
      },

      refreshSize: throttle(function () {
        let vm = this
        let lastElm = {}

        // Manage height
        function getBottom (elt) {
          let parent = elt.offsetParent
          if (parent === null) {
            return 0
          } else {
            return elt.offsetTop + getBottom(parent)
          }
        }

        vm.bottom = getBottom(vm.$refs.tbody) + parseInt(vm.bottomMarge)
        vm.$refs.tbody.style.maxHeight = vm.winHeight - vm.bottom + 'px'

        // Manage width
        // - If tbody is empty, do nothing
        if (vm.$slots.tbody === undefined) return
        if (vm.$slots.tbody[0].children.length === 0) return
        if (vm.$slots.tbody[0].children[0].children.length === 0) return

        // - Thead can include tr or not
        let tbody = vm.$slots.tbody[0].children[0]
        let thead = vm.$slots.thead[0]
        if (thead.children[0].elm.nodeName === 'TR') {
          thead = thead.children[0]
        }

        let marge = 0
        thead.children.forEach((node, index) => {
          if (node.elm.nodeName === 'TH') {
            let style = window.getComputedStyle(node.elm, null)
            if (parseInt(parseFloat(style.getPropertyValue('width') || 0) - node.elm.offsetWidth) !== 0) {
              marge =
                parseFloat(style.getPropertyValue('padding-left') || 0) +
                parseFloat(style.getPropertyValue('padding-right') || 0) +
                parseFloat(style.getPropertyValue('border-left-width') || 0) +
                parseFloat(style.getPropertyValue('border-right-width') || 0)
            }
            // node.elm.style.width = tbody.children[index].elm.offsetWidth - marge + 'px'
            node.elm.style.setProperty('width', tbody.children[index].elm.offsetWidth - marge + 'px')

            lastElm = {
              elm: node.elm,
              index: index,
              marge: marge
            }
          }
        })
        lastElm.elm.style.setProperty('width', '')
        lastElm.elm.style.setProperty('max-width', thead.children[lastElm.index].elm.offsetWidth - lastElm.marge + 'px')
      }, 200)
    }
  }
</script>
