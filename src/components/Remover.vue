<template>
  <DropField class="remover" :class="{ remover_hover: dropHover }"></DropField>
</template>

<script>
import DropField from './DropField.vue'
import { mapState } from 'vuex'

export default {
  name: 'Remover',
  components: {
    DropField,
  },
  computed: {
    ...mapState(['dropHover']),
  },
}
</script>


<style scoped>
.remover {
  height: 60px;
  background-color: var(--remover-color);
  width: 100%;
  border-radius: var(--fillet-radius) var(--fillet-radius) 0 0;
  position: sticky;
  bottom: 0;
}

.remover_hover {
  background-color: pink;
}
</style>
