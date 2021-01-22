<template>
  <DragElement :id="id" class="task" :class="{ done: done }">
    <div class="status">
      <input type="checkbox" v-model="done" />
    </div>

    <div class="text">
      {{ text }}
    </div>
  </DragElement>
</template>

<script>
import DragElement from './DragElement.vue'
import { mapState } from 'vuex'

export default {
  name: 'Task',
  props: ['id', 'text', 'done'],
  components: {
    DragElement,
  },
  computed: {
    ...mapState(['tasks']),
  },
  watch: {
    done() {
      localStorage['task' + this.id] = JSON.stringify({
        text: this.text,
        done: this.done,
      })
    },
  },
}
</script>

<style scoped>
.task {
  display: grid;
  background-color: var(--task-main-color);
  border-radius: var(--fillet-radius);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'SFProDisplay', Arial, Helvetica, sans-serif;
  color: white;
  font-size: 16px;
  line-height: 24px;
  grid-template-columns: 60px 1fr;
  overflow: hidden;
}

.status,
.text {
  display: flex;
  padding: 20px;
}

.status {
  background-color: var(--task-todo-color);
  justify-content: center;
  align-items: center;
}

.text {
  overflow: hidden;
}

.task.done .status {
  background-color: var(--task-done-color);
}

.task.done {
  order: 1;
}
</style>
