import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {},
    id: 0,
    dragMode: false,
    dropHover: false,
    dropFieldTop: null,
  },
  mutations: {
    addTask(state, { text, done }) {
      state.tasks[state.id] = { text, done }
      localStorage['task' + state.id] = JSON.stringify({ text, done })
      state.id++
    },
    deleteTask(state, id) {
      delete state.tasks[id]
      delete localStorage['task' + id]
    },
    dragModeToggle(state) {
      state.dragMode = !state.dragMode
    },
    setDragMode(state) {
      state.dragMode = true
    },
    dropHoverToggle(state) {
      state.dropHover = !state.dropHover
    },
    setDropFieldTop(state, value) {
      state.dropFieldTop = value
    },
  },
  getters: {
  },
  actions: {},
  modules: {},
})
