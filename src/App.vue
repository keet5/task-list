<template>
  <Creator />
  <div class="tasks">
    <Task v-for="(task, id) of tasks" :key="id" v-bind="{ id, ...task }" />
  </div>

  <Remover />
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Creator from './components/Creator.vue'
import Task from './components/Task.vue'
import Remover from './components/Remover.vue'

export default {
  name: 'App',
  components: {
    Creator,
    Task,
    Remover,
  },
  methods: {
    ...mapMutations(['deleteTask', 'addTask']),
  },
  computed: {
    ...mapState(['tasks']),
  },

  mounted() {
    const buf = []
    const clearStorage = []
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key.startsWith('task')) {
        console.log()
        buf.push([
          parseInt(key.replace(/^task/, '')),
          JSON.parse(localStorage[key]),
        ])
        clearStorage.push(key)
      }
    }
    clearStorage.forEach((key) => delete localStorage[key])
    buf
      .sort((a, b) => a[0] - b[0])
      .map(([_, task]) => task)
      .forEach((task) => this.addTask(task))
  },
}
</script>

<style>
@import 'assets/css/main.css';

#app {
  font-family: Arial;
  min-height: 100vh;
  display: grid;
  max-width: var(--app-width);
  margin: auto;
  grid-template-rows: auto 1fr;
  position: relative;
}

.tasks {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
}
</style>
