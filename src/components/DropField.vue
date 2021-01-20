<template>
  <div
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

export default {
  name: 'DropField',

  methods: {
    ...mapMutations(['deleteTask', 'dropHoverToggle']),

    dragEnter(event) {
      this.dropHoverToggle()
    },

    dragLeave(event) {
      this.dropHoverToggle()
    },

    dragDrop(event) {
      this.deleteTask(event.dataTransfer.getData('id'))
    },
  },
  computed: {
    ...mapState(['dragMode', 'dropHover']),
  },
}
</script>

