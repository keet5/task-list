<template>
  <div
    class="drag-element"
    draggable="true"
    @dragstart="dragStart($event)"
    @dragend="dragEnd"
    v-show="show"
    @touchstart="touchStart"
  >
    <slot />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      show: true,
    }
  },
  methods: {
    touchStart(event) {
      const vue = this
      const element = event.target.parentNode

      element.addEventListener('touchmove', resetTimer, {
        once: true,
      })
      element.addEventListener('touchend', resetTimer, {
        once: true,
      })
      const startMoveTimer = setTimeout(startMove, 500)

      function resetTimer() {
        clearTimeout(startMoveTimer)
      }
      function startMove() {
        let { x, y, width, height } = element.getBoundingClientRect()

        const { clientX, clientY } = event.targetTouches[0]
        let previousX = clientX
        let previousY = clientY

        element.removeEventListener('touchmove', resetTimer)
        element.removeEventListener('touchend', resetTimer)
        element.addEventListener('touchend', endMove, { once: true })

        element.style.width = width + 'px'
        element.style.height = height + 'px'
        element.style.top = y + 'px'
        element.style.left = x + 'px'
        element.style.position = 'fixed'
        document.body.style.overflow = 'hidden'
        vue.setDragMode()

        element.addEventListener('touchmove', move)

        function move(event) {
          const { clientX, clientY } = event.targetTouches[0]
          x += clientX - previousX
          y += clientY - previousY

          element.style.top = y + 'px'
          element.style.left = x + 'px'

          previousX = clientX
          previousY = clientY

          const xor = (a, b) => (!a && b) || (a && !b)
          if (xor(y + height > vue.dropFieldTop, vue.dropHover)) {
            vue.dropHoverToggle()
          }
        }

        function endMove() {
          if (vue.dropHover) {
            vue.deleteTask(vue.id)
            vue.dropHoverToggle()
          }

          document.body.style.overflow = ''
          element.style.width = ''
          element.style.height = ''
          element.style.top = ''
          element.style.left = ''
          element.style.position = ''
          vue.dragModeToggle()
          element.removeEventListener('touchmove', move)
        }
      }
    },

    dragStart(event) {
      this.show = false
      event.dataTransfer.setData('id', this.id)
      this.dragModeToggle()
    },

    dragEnd(event) {
      this.show = true
      this.dragModeToggle()
    },
    ...mapMutations([
      'dragModeToggle',
      'setDragMode',
      'dropHoverToggle',
      'deleteTask',
    ]),
  },
  computed: {
    ...mapState(['dragMode', 'dropHover', 'dropElement', 'dropFieldTop']),
  },
}
</script>
