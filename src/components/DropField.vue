<template>
  <div
    ref="dropField"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop.prevent="dragDrop"
    @dragOver.prevent=""
    v-show="dragMode"
  >
    <slot />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { nextTick } from 'vue'

export default {
  name: 'DropField',

  methods: {
    ...mapMutations([
      'deleteTask',
      'dropHoverToggle',
      'setDropFieldTop',
      'dragModeToggle',
    ]),

    dragEnter(event) {
      this.dropHoverToggle()
    },

    dragLeave(event) {
      this.dropHoverToggle()
    },

    dragDrop(event) {
      this.dropHoverToggle()
      this.deleteTask(event.dataTransfer.getData('id'))
    },
  },
  computed: {
    ...mapState(['dragMode', 'dropHover']),
  },
  watch: {
    dragMode() {
      if (this.dragMode) {
        nextTick(() =>
          this.setDropFieldTop(this.$refs.dropField.getBoundingClientRect().top)
        )
      }
    },
  },
}
</script>

