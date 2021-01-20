<template>
  <div
    class="drag-element"
    draggable="true"
    @dragstart="dragStart($event)"
    @dragend="dragEnd"
    v-show="show"
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
    ...mapMutations(['dragModeToggle']),

    dragStart(event) {
      this.show = false
      event.dataTransfer.setData('id', this.id)
      this.dragModeToggle()
    },

    dragEnd(event) {
      this.show = true
      this.dragModeToggle()
    },
  },
  computed: {
    ...mapState(['dragMode']),
  },
}
</script>
