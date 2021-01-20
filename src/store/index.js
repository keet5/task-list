import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {},
    id: 0,
    dragMode: false,
    dropHover: false,
  },
  mutations: {
    addTask(state, { text, done }) {
      state.tasks[state.id++] = { text, done }
    },
    deleteTask(state, id) {
      delete state.tasks[id]
    },
    dragModeToggle(state) {
      state.dragMode = !state.dragMode
    },
    dropHoverToggle(state) {
      state.dropHover = !state.dropHover
    },
  },
  actions: {},
  modules: {},
})
